package org.example.aihelper.controller;

import org.example.aihelper.model.ChatRequest;
import org.example.aihelper.model.ChatResponse;
import org.example.aihelper.model.ChartData;
import org.example.aihelper.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

    @Autowired
    private AIService aiService;

    @PostMapping("/chat")
    public ResponseEntity<ChatResponse> chat(@RequestBody ChatRequest request) {
        try {
            String reply = aiService.getAIResponse(request.getMessage());
            return ResponseEntity.ok(new ChatResponse(reply));
        } catch (Exception e) {
            return ResponseEntity.ok(new ChatResponse("抱歉，AI服务暂时不可用，请稍后再试。我将继续为您提供最佳服务。"));
        }
    }

    @PostMapping(value = "/chat/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<String>> chatStream(@RequestBody ChatRequest request) {
        String msg = request != null ? request.getMessage() : "";
        if (msg == null) msg = "";
        return aiService.streamAIResponse(msg)
                .map(chunk -> ServerSentEvent.builder(chunk).build())
                .concatWith(Mono.just(ServerSentEvent.builder("[DONE]").build()));
    }

    @GetMapping("/data")
    public ResponseEntity<ChartData> getData() {
        ChartData data = new ChartData();
        data.setTrendLabels(new String[]{"1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"});
        data.setTrendData(new int[]{120,145,178,203,234,267,289,312,334,356,378,401});
        data.setPieLabels(new String[]{"人工智能","电子商务","教育科技","医疗健康","金融科技","企业服务","消费升级","其他"});
        data.setPieData(new int[]{28,22,18,15,12,8,6,3});
        data.setBarLabels(new String[]{"种子轮","天使轮","A轮","B轮","C轮","D轮+","IPO"});
        data.setBarData(new int[]{50,200,800,2000,5000,12000,25000});
        data.setGeoLabels(new String[]{"北京","上海","深圳","杭州","广州","成都","武汉","西安","南京","苏州"});
        data.setGeoData(new int[]{234,198,156,89,67,45,38,32,28,24});
        data.setHeatmapData(generateHeatmapData());
        data.setSankeyNodes(new String[]{"种子资金","天使投资","VC投资","PE投资","AI领域","电商领域","教育领域","医疗领域","成功退出","继续发展","失败退出"});
        data.setSankeyLinks(generateSankeyLinks());
        data.setRealtimeData(generateRealtimeData());
        return ResponseEntity.ok(data);
    }

    private int[][] generateHeatmapData() {
        int[][] heatmap = new int[5][5];
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                heatmap[i][j] = 20 + (int)(Math.random() * 70);
            }
        }
        return heatmap;
    }

    private int[][] generateSankeyLinks() {
        return new int[][]{
                {0,4,30},{0,5,25},{1,4,40},{1,6,30},{2,4,50},{2,7,35},{3,4,25},{4,8,60},{4,9,45},{5,8,35},{5,9,40},{6,9,25},{7,8,30}
        };
    }

    private int[] generateRealtimeData() {
        int[] realtime = new int[20];
        int base = 75;
        for (int i = 0; i < 20; i++) {
            base += (int)(Math.random() * 20 - 10);
            base = Math.max(30, Math.min(120, base));
            realtime[i] = base;
        }
        return realtime;
    }
}

