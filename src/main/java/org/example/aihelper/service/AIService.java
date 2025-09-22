package org.example.aihelper.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.CompletableFuture;
import java.util.Arrays;

/**
 * AI服务类 - 处理与AI接口的交互（迁移自 demo 包）
 */
@Service
public class AIService {

    @Value("${spring.ai.openai.api-key:}")
    private String apiKey;

    @Value("${spring.ai.openai.base-url:https://api.siliconflow.cn}")
    private String baseUrl;

    @Value("${spring.ai.openai.chat.options.model:Qwen/Qwen2.5-72B-Instruct}")
    private String model;

    private final WebClient webClient;
    private final ObjectMapper objectMapper;

    public AIService() {
        this.webClient = WebClient.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(10 * 1024 * 1024))
                .build();
        this.objectMapper = new ObjectMapper();
    }

    public String getAIResponse(String userMessage) {
        try {
            if (apiKey == null || apiKey.isBlank()) {
                return generateFallbackResponse(userMessage);
            }
            return getAIResponseAsync(userMessage).get();
        } catch (Exception e) {
            System.err.println("AI API调用失败: " + e.getMessage());
            return generateFallbackResponse(userMessage);
        }
    }

    private CompletableFuture<String> getAIResponseAsync(String userMessage) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                String systemPrompt = """
                    你是一个专业的创业顾问AI助手，专为创业者提供实用的建议和指导。
                    请根据用户的问题，提供专业、实用、具有可操作性的创业建议。
                    回答应当简洁明了，重点突出，并且符合中国的创业环境。
                    请用专业但易懂的语言回答，并提供具体的行动建议。
                    回答长度控制在300字以内，条理清晰。
                    输出格式要求：
                    - 使用短段落，每个段落1-3句，段落之间用空行分隔
                    - 关键要点使用有序或无序列表（- 或 1. 2. 3.）
                    - 重要词汇可以使用**加粗**
                    """;

                List<Map<String, String>> messages = new ArrayList<>();
                Map<String, String> systemMessage = new HashMap<>();
                systemMessage.put("role", "system");
                systemMessage.put("content", systemPrompt);
                messages.add(systemMessage);

                Map<String, String> userMsg = new HashMap<>();
                userMsg.put("role", "user");
                userMsg.put("content", userMessage);
                messages.add(userMsg);

                Map<String, Object> requestBody = new HashMap<>();
                requestBody.put("model", model);
                requestBody.put("messages", messages);
                requestBody.put("max_tokens", 800);
                requestBody.put("temperature", 0.7);
                requestBody.put("stream", false);

                String responseBody = webClient.post()
                        .uri(baseUrl + "/v1/chat/completions")
                        .header("Authorization", "Bearer " + apiKey)
                        .header("Content-Type", "application/json")
                        .bodyValue(requestBody)
                        .retrieve()
                        .bodyToMono(String.class)
                        .timeout(Duration.ofSeconds(30))
                        .block(Duration.ofSeconds(35));

                if (responseBody == null) {
                    throw new RuntimeException("AI API返回空响应");
                }

                JsonNode jsonNode = objectMapper.readTree(responseBody);
                JsonNode choices = jsonNode.get("choices");
                if (choices != null && choices.size() > 0) {
                    JsonNode message = choices.get(0).get("message");
                    if (message != null && message.get("content") != null) {
                        String content = message.get("content").asText();
                        return content;
                    }
                }

                throw new RuntimeException("AI API响应格式错误");

            } catch (WebClientResponseException e) {
                throw new RuntimeException("AI API调用失败: HTTP " + e.getStatusCode());
            } catch (Exception e) {
                throw new RuntimeException("AI API调用失败: " + e.getMessage());
            }
        });
    }

    public Flux<String> streamAIResponse(String userMessage) {
        if (apiKey == null || apiKey.isBlank()) {
            return Flux.just("抱歉，AI流式服务暂时不可用，请稍后重试。");
        }

        List<Map<String, String>> messages = new ArrayList<>();
        Map<String, String> sys = new HashMap<>();
        sys.put("role", "system");
        sys.put("content", "你是一个专业的创业顾问AI助手，回答简洁明了，条理清晰。始终使用短段落输出，段落之间留空行；关键建议用项目符号（- 或 1. 2. 3.）列出，并可对关键词**加粗**。");
        messages.add(sys);
        Map<String, String> usr = new HashMap<>();
        usr.put("role", "user");
        usr.put("content", userMessage);
        messages.add(usr);

        Map<String, Object> body = new HashMap<>();
        body.put("model", model);
        body.put("messages", messages);
        body.put("max_tokens", 800);
        body.put("temperature", 0.7);
        body.put("stream", true);

        return webClient.post()
                .uri(baseUrl + "/v1/chat/completions")
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .accept(MediaType.TEXT_EVENT_STREAM)
                .bodyValue(body)
                .retrieve()
                .bodyToFlux(String.class)
                .flatMap(chunk -> Flux.fromIterable(Arrays.asList(chunk.split("\n"))))
                .map(String::trim)
                .filter(line -> !line.isEmpty())
                .map(line -> line.startsWith("data:") ? line.substring(5).trim() : line)
                .takeUntil(line -> "[DONE]".equals(line))
                .filter(line -> !"[DONE]".equals(line))
                .map(json -> {
                    try {
                        JsonNode node = objectMapper.readTree(json);
                        JsonNode choices = node.get("choices");
                        if (choices != null && choices.size() > 0) {
                            JsonNode delta = choices.get(0).get("delta");
                            if (delta != null && delta.get("content") != null) {
                                return delta.get("content").asText();
                            }
                        }
                    } catch (Exception ignore) {}
                    return "";
                })
                .filter(s -> s != null && !s.isEmpty())
                .timeout(Duration.ofSeconds(120))
                .onErrorResume(e -> Flux.just("抱歉，AI流式服务暂时不可用，请稍后重试."));
    }

    private String generateFallbackResponse(String userMessage) {
        String message = userMessage == null ? "" : userMessage.toLowerCase();
        if (message.contains("商业计划") || message.contains("bp") || message.contains("计划书")) {
            return """
                📋 关于商业计划书的建议：
                
                1. 执行摘要 - 用1-2页简洁描述项目核心
                2. 市场分析 - 深入了解目标市场和竞争对手
                3. 产品服务 - 清晰描述产品价值主张
                4. 营销策略 - 制定可执行的市场推广计划
                5. 财务预测 - 提供3-5年的财务规划
                6. 团队介绍 - 突出核心团队的优势和经验
                
                💡 建议先制作精简版本进行初步验证，再完善详细版本。
                """;
        }
        if (message.contains("投资") || message.contains("融资") || message.contains("资金")) {
            return """
                💰 关于融资的建议：
                
                1. 明确融资目标 - 确定具体的资金需求和用途
                2. 选择合适轮次 - 天使轮/A轮/B轮等不同阶段策略
                3. 准备完整材料 - BP、财务报表、法律文件等
                4. 寻找匹配投资人 - 研究投资机构的投资偏好
                5. 估值合理定价 - 参考同行业估值水平
                6. 谈判关键条款 - 注意股权比例和投资条款
                
                🎯 记住：投资人投的是人和团队，展现执行力很重要！
                """;
        }
        if (message.contains("团队") || message.contains("合伙人") || message.contains("招聘")) {
            return """
                👥 关于团队建设的建议：
                
                1. 核心团队 - 技术、产品、市场三个核心角色
                2. 股权分配 - 合理的股权架构，避免平均分配
                3. 文化建设 - 建立共同的价值观和工作方式
                4. 激励机制 - 设计有效的员工激励和期权制度
                5. 招聘策略 - 优先招聘认同企业文化的人才
                6. 团队磨合 - 定期沟通，及时解决团队内部问题
                
                ⚡ 好的团队是创业成功的关键，选择比培养更重要！
                """;
        }
        if (message.contains("市场") || message.contains("营销") || message.contains("推广")) {
            return """
                📊 关于市场营销的建议：
                
                1. 目标客户定位 - 明确核心用户画像和需求
                2. 价值主张设计 - 提炼产品的核心卖点
                3. 渠道策略选择 - 线上线下多渠道布局
                4. 内容营销 - 通过有价值的内容吸引用户
                5. 数据驱动优化 - 建立用户行为数据分析体系
                6. 口碑营销 - 重视用户体验，建立推荐机制
                
                🚀 在资源有限的情况下，专注做好一个渠道胜过平庸地做多个！
                """;
        }
        return """
            🤖 感谢您的咨询！作为您的AI创业顾问，我建议：
            
            1. 明确目标 - 将问题具体化，制定清晰的行动计划
            2. 市场验证 - 在投入大量资源前，先验证市场需求
            3. 快速迭代 - 采用MVP（最小可行产品）模式快速试错
            4. 关注现金流 - 现金流是创业公司的生命线
            5. 建立网络 - 积极参与行业活动，建立人脉关系
            
            💡 如需更具体的建议，请详细描述您遇到的具体问题，我会提供更针对性的指导。
            """;
    }
}

