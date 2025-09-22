const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// 首页组件 - 深色科技感
const Home = {
    template: `
    <div class="min-h-screen">
        <!-- 科技感英雄区域 -->
        <div class="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 py-20 overflow-hidden">
            <!-- 动态粒子背景 -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="particle-field">
                    <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
                </div>
            </div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="text-white fade-in">
                        <h1 class="text-6xl font-bold mb-6 neon-text">AI 创业助手</h1>
                        <h2 class="text-3xl mb-6 text-cyan-300">让创业更智能，让梦想更可能</h2>
                        <p class="text-lg mb-8 text-slate-300 leading-relaxed">
                            基于先进的人工智能技术，为创业者提供专业的商业建议、
                            市场分析和数据洞察，助力您的创业之路踏上成功巅峰。
                        </p>
                        <div class="space-x-6">
                            <button @click="$router.push('/chat')" class="btn-primary">
                                🚀 开始咨询 AI
                            </button>
                            <button @click="$router.push('/charts')" class="btn-secondary">
                                📊 查看数据中心
                            </button>
                        </div>
                    </div>
                    <div class="fade-in relative">
                        <div class="image-placeholder h-96 rounded-2xl relative overflow-hidden">
                            <img src="placeholder.svg" alt="待替换图片 - 创业主题" class="w-full h-full object-cover rounded-2xl opacity-30">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/80 to-purple-900/80 rounded-2xl">
                                <div class="text-center text-cyan-100">
                                    <div class="text-4xl mb-4">🎯</div>
                                    <p class="text-lg font-medium">请替换为创业主题图片</p>
                                    <p class="text-sm text-cyan-300 mt-2">高清科技感图片效果更佳</p>
                                </div>
                            </div>
                        </div>
                        <div class="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                        <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse" style="animation-delay: 1s"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 功能特色区域 - 深色主题 -->
        <div class="py-20 bg-slate-900/50 backdrop-blur-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-4xl font-bold text-center text-cyan-100 mb-16 neon-text">核心功能矩阵</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="card text-center pulse-animation group">
                        <div class="image-placeholder h-32 w-32 mx-auto mb-6 rounded-full relative">
                            <img src="placeholder.svg" alt="待替换图片 - AI咨询" class="w-full h-full object-cover rounded-full opacity-40">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full group-hover:from-cyan-400/50 group-hover:to-blue-400/50 transition-all duration-300">
                                <span class="text-3xl">🤖</span>
                            </div>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-cyan-100">智能咨询</h4>
                        <p class="text-slate-300 leading-relaxed">24/7 AI创业顾问，为您提供个性化的商业建议和解决方案</p>
                        <div class="mt-4 flex justify-center">
                            <div class="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>
                    </div>
                    <div class="card text-center pulse-animation group" style="animation-delay: 0.3s">
                        <div class="image-placeholder h-32 w-32 mx-auto mb-6 rounded-full relative">
                            <img src="placeholder.svg" alt="待替换图片 - 数据分析" class="w-full h-full object-cover rounded-full opacity-40">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full group-hover:from-purple-400/50 group-hover:to-pink-400/50 transition-all duration-300">
                                <span class="text-3xl">📊</span>
                            </div>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-cyan-100">数据分析</h4>
                        <p class="text-slate-300 leading-relaxed">实时市场数据分析，帮助您把握创业趋势和投资机会</p>
                        <div class="mt-4 flex justify-center">
                            <div class="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                    </div>
                    <div class="card text-center pulse-animation group" style="animation-delay: 0.6s">
                        <div class="image-placeholder h-32 w-32 mx-auto mb-6 rounded-full relative">
                            <img src="placeholder.svg" alt="待替换图片 - 专业团队" class="w-full h-full object-cover rounded-full opacity-40">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full group-hover:from-emerald-400/50 group-hover:to-teal-400/50 transition-all duration-300">
                                <span class="text-3xl">👥</span>
                            </div>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-cyan-100">专业团队</h4>
                        <p class="text-slate-300 leading-relaxed">资深创业导师和技术专家，为您的创业保驾护航</p>
                        <div class="mt-4 flex justify-center">
                            <div class="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods: {
        getParticleStyle(index) {
            const size = Math.random() * 3 + 1;
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 10 + 15;

            return {
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
            };
        }
    }
};

// 增强版数据分析页面 - 复杂的创业数据可视化
const Charts = {
    template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-8">
        <!-- 横幅图片区域 -->
        <div class="mb-8">
            <div class="image-placeholder h-48 max-w-7xl mx-auto rounded-2xl relative overflow-hidden">
                <img src="placeholder.svg" alt="待替换图片 - 数据分析横幅" class="w-full h-full object-cover rounded-2xl opacity-20">
                <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-slate-900/90 via-purple-900/80 to-slate-900/90 rounded-2xl">
                    <div class="text-center text-cyan-100">
                        <h1 class="text-4xl font-bold neon-text mb-4">🚀 创业数据中心</h1>
                        <p class="text-lg text-cyan-300">实时市场分析 • AI驱动洞察 • 趋势预测</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- 实时数据概览仪表板 -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div class="card text-center bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-400/30">
                    <div class="text-cyan-400 text-3xl mb-2">💰</div>
                    <div class="text-2xl font-bold text-cyan-100 mb-1">{{ formatNumber(totalFunding) }}</div>
                    <div class="text-sm text-cyan-300">总融资额 (万元)</div>
                    <div class="text-xs text-green-400 mt-1">↗ +12.5%</div>
                </div>
                <div class="card text-center bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-400/30">
                    <div class="text-purple-400 text-3xl mb-2">🏢</div>
                    <div class="text-2xl font-bold text-purple-100 mb-1">{{ startupCount }}</div>
                    <div class="text-sm text-purple-300">活跃创业公司</div>
                    <div class="text-xs text-green-400 mt-1">↗ +8.3%</div>
                </div>
                <div class="card text-center bg-gradient-to-br from-emerald-900/50 to-teal-900/50 border-emerald-400/30">
                    <div class="text-emerald-400 text-3xl mb-2">👥</div>
                    <div class="text-2xl font-bold text-emerald-100 mb-1">{{ formatNumber(userGrowth) }}</div>
                    <div class="text-sm text-emerald-300">月活用户增长</div>
                    <div class="text-xs text-green-400 mt-1">↗ +25.7%</div>
                </div>
                <div class="card text-center bg-gradient-to-br from-orange-900/50 to-red-900/50 border-orange-400/30">
                    <div class="text-orange-400 text-3xl mb-2">📈</div>
                    <div class="text-2xl font-bold text-orange-100 mb-1">{{ successRate }}%</div>
                    <div class="text-sm text-orange-300">项目成功率</div>
                    <div class="text-xs text-green-400 mt-1">↗ +4.2%</div>
                </div>
            </div>

            <!-- 复杂图表网格布局 -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <!-- 用户增长趋势 + 融资额双轴图 -->
                <div class="card chart-container p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-cyan-100">用户增长 vs 融资趋势</h3>
                        <div class="flex space-x-2">
                            <button @click="updateDualAxisChart" class="text-xs bg-cyan-600/30 text-cyan-300 px-3 py-1 rounded-lg hover:bg-cyan-600/50 transition-all">
                                🔄 刷新
                            </button>
                            <button @click="exportChart('dualAxis')" class="text-xs bg-purple-600/30 text-purple-300 px-3 py-1 rounded-lg hover:bg-purple-600/50 transition-all">
                                📊 导出
                            </button>
                        </div>
                    </div>
                    <div id="dualAxisChart" class="h-80 w-full"></div>
                    <div class="mt-4 p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                        <p class="text-sm text-cyan-300">
                            <span class="font-semibold text-cyan-400">AI 分析：</span>
                            {{ dualAxisAnalysis }}
                        </p>
                    </div>
                </div>

                <!-- 行业分布热力图 -->
                <div class="card chart-container p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-cyan-100">行业热力分布图</h3>
                        <div class="flex space-x-2">
                            <select @change="updateHeatmapData" v-model="selectedTimeFrame" class="text-xs bg-slate-700 text-cyan-300 px-3 py-1 rounded-lg border border-cyan-500/30">
                                <option value="week">本周</option>
                                <option value="month">本月</option>
                                <option value="quarter">本季度</option>
                            </select>
                        </div>
                    </div>
                    <div id="heatmapChart" class="h-80 w-full"></div>
                    <div class="mt-4 p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
                        <p class="text-sm text-purple-300">
                            <span class="font-semibold text-purple-400">行业洞察：</span>
                            {{ heatmapAnalysis }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- 第二行复杂图表 -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <!-- 资金流向堆叠柱状图 -->
                <div class="card chart-container p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-cyan-100">资金流向分析</h3>
                        <div class="text-xs text-cyan-400">📊</div>
                    </div>
                    <div id="fundingFlowChart" class="h-64 w-full"></div>
                    <div class="mt-4 p-3 bg-slate-800/50 rounded-lg border border-emerald-500/20">
                        <p class="text-xs text-emerald-300">
                            <span class="font-semibold text-emerald-400">资金分析：</span>
                            {{ fundingAnalysis }}
                        </p>
                    </div>
                </div>

                <!-- 地理分布图 -->
                <div class="card chart-container p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-cyan-100">地理分布</h3>
                        <div class="text-xs text-cyan-400">🗺️</div>
                    </div>
                    <div id="geoChart" class="h-64 w-full"></div>
                    <div class="mt-4 p-3 bg-slate-800/50 rounded-lg border border-orange-500/20">
                        <p class="text-xs text-orange-300">
                            <span class="font-semibold text-orange-400">区域洞察：</span>
                            {{ geoAnalysis }}
                        </p>
                    </div>
                </div>

                <!-- 成功率预测模型 -->
                <div class="card chart-container p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-bold text-cyan-100">AI 成功率预测</h3>
                        <div class="text-xs text-cyan-400">🎯</div>
                    </div>
                    <div id="predictionChart" class="h-64 w-full"></div>
                    <div class="mt-4 p-3 bg-slate-800/50 rounded-lg border border-pink-500/20">
                        <p class="text-xs text-pink-300">
                            <span class="font-semibold text-pink-400">AI 预测：</span>
                            {{ predictionAnalysis }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- 交互式详细数据表格 -->
            <div class="card p-6" v-show="selectedDataPoint">
                <h3 class="text-xl font-bold text-cyan-100 mb-4">详细数据分析</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-slate-800/50 p-4 rounded-lg border border-cyan-500/20">
                        <h4 class="text-lg font-semibold text-cyan-300 mb-3">选中数据点信息</h4>
                        <div v-if="selectedDataPoint" class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-slate-300">时间：</span>
                                <span class="text-cyan-100">{{ selectedDataPoint.time }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-300">数值：</span>
                                <span class="text-cyan-100">{{ selectedDataPoint.value }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-300">分类：</span>
                                <span class="text-cyan-100">{{ selectedDataPoint.category }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-slate-300">增长率：</span>
                                <span class="text-green-400">{{ selectedDataPoint.growth }}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-lg border border-purple-500/20">
                        <h4 class="text-lg font-semibold text-purple-300 mb-3">AI 深度分析</h4>
                        <p class="text-sm text-slate-300 leading-relaxed">
                            {{ selectedDataPoint ? selectedDataPoint.aiAnalysis : '点击图表中的数据点查看详细分析' }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            totalFunding: 28567,
            startupCount: 1234,
            userGrowth: 45678,
            successRate: 73.5,
            selectedTimeFrame: 'month',
            selectedDataPoint: null,
            dualAxisAnalysis: '用户增长与融资额呈现强正相关关系，AI模型预测下月用户增长将达到新高。',
            heatmapAnalysis: 'AI技术和电商领域活跃度最高，生物科技领域投资机会显著增加。',
            fundingAnalysis: 'A轮融资占比最大，Pre-A轮增长迅速，种子轮竞争激烈。',
            geoAnalysis: '北京、上海、深圳三地创业活跃度领先，成都、杭州快速追赶。',
            predictionAnalysis: 'AI模型预测未来3个月成功率将提升至78.2%，建议关注技术类项目。'
        };
    },
    mounted() {
        this.initializeCharts();
        this.startRealTimeUpdates();
    },
    methods: {
        formatNumber(num) {
            return (num / 10000).toFixed(1);
        },

        initializeCharts() {
            this.createDualAxisChart();
            this.createHeatmapChart();
            this.createFundingFlowChart();
            this.createGeoChart();
            this.createPredictionChart();
        },

        createDualAxisChart() {
            const chart = echarts.init(document.getElementById('dualAxisChart'));
            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    borderColor: 'rgba(0, 245, 255, 0.3)',
                    textStyle: { color: '#e0e6ed' }
                },
                legend: {
                    data: ['用户增长', '融资金额'],
                    textStyle: { color: '#94a3b8' },
                    top: 10
                },
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' }
                },
                yAxis: [
                    {
                        type: 'value',
                        name: '用户数(万)',
                        nameTextStyle: { color: '#0ea5e9' },
                        axisLine: { lineStyle: { color: '#334155' } },
                        axisLabel: { color: '#94a3b8' },
                        splitLine: { lineStyle: { color: '#1e293b', type: 'dashed' } }
                    },
                    {
                        type: 'value',
                        name: '融资额(亿)',
                        nameTextStyle: { color: '#8b5cf6' },
                        axisLine: { lineStyle: { color: '#334155' } },
                        axisLabel: { color: '#94a3b8' }
                    }
                ],
                series: [
                    {
                        name: '用户增长',
                        type: 'line',
                        yAxisIndex: 0,
                        data: [12, 18, 25, 32, 45, 58, 72, 89, 105],
                        smooth: true,
                        lineStyle: { color: '#0ea5e9', width: 3 },
                        itemStyle: { color: '#0ea5e9' },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: 'rgba(14, 165, 233, 0.3)' },
                                { offset: 1, color: 'rgba(14, 165, 233, 0.05)' }
                            ])
                        }
                    },
                    {
                        name: '融资金额',
                        type: 'bar',
                        yAxisIndex: 1,
                        data: [2.1, 2.8, 3.5, 4.2, 5.8, 7.2, 8.9, 10.5, 12.3],
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#8b5cf6' },
                                { offset: 1, color: '#3b82f6' }
                            ])
                        }
                    }
                ]
            };
            chart.setOption(option);

            chart.on('click', (params) => {
                this.selectedDataPoint = {
                    time: params.name,
                    value: params.value,
                    category: params.seriesName,
                    growth: Math.random() * 20 + 5,
                    aiAnalysis: `${params.name}的${params.seriesName}为${params.value}，AI分析显示该数据点具有重要意义，建议深入关注相关趋势变化。`
                };
            });
        },

        createHeatmapChart() {
            const chart = echarts.init(document.getElementById('heatmapChart'));
            const industries = ['AI/ML', '电商', '金融科技', '生物科技', '教育', '医疗', '游戏', '企业服务'];
            const months = ['Q1', 'Q2', 'Q3', 'Q4'];
            const data = [];

            for (let i = 0; i < industries.length; i++) {
                for (let j = 0; j < months.length; j++) {
                    data.push([j, i, Math.floor(Math.random() * 100)]);
                }
            }

            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    position: 'top',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    borderColor: 'rgba(0, 245, 255, 0.3)',
                    textStyle: { color: '#e0e6ed' }
                },
                grid: { height: '70%', top: '10%' },
                xAxis: {
                    type: 'category',
                    data: months,
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' }
                },
                yAxis: {
                    type: 'category',
                    data: industries,
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8' }
                },
                visualMap: {
                    min: 0,
                    max: 100,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '5%',
                    inRange: { color: ['#1e293b', '#0ea5e9', '#8b5cf6', '#f59e0b'] },
                    textStyle: { color: '#94a3b8' }
                },
                series: [{
                    name: '活跃度',
                    type: 'heatmap',
                    data: data,
                    label: { show: true, color: '#e0e6ed', fontSize: 10 },
                    emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 245, 255, 0.5)' } }
                }]
            };
            chart.setOption(option);
        },

        createFundingFlowChart() {
            const chart = echarts.init(document.getElementById('fundingFlowChart'));
            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    borderColor: 'rgba(0, 245, 255, 0.3)',
                    textStyle: { color: '#e0e6ed' }
                },
                legend: {
                    data: ['种子轮', 'Pre-A', 'A轮', 'B轮', 'C轮'],
                    textStyle: { color: '#94a3b8', fontSize: 10 },
                    top: 5
                },
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                xAxis: {
                    type: 'category',
                    data: ['Q1', 'Q2', 'Q3', 'Q4'],
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8', fontSize: 10 }
                },
                yAxis: {
                    type: 'value',
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8', fontSize: 10 },
                    splitLine: { lineStyle: { color: '#1e293b', type: 'dashed' } }
                },
                series: [
                    { name: '种子轮', type: 'bar', stack: '总量', data: [320, 302, 341, 374], itemStyle: { color: '#0ea5e9' } },
                    { name: 'Pre-A', type: 'bar', stack: '总量', data: [120, 132, 101, 134], itemStyle: { color: '#3b82f6' } },
                    { name: 'A轮', type: 'bar', stack: '总量', data: [220, 182, 191, 234], itemStyle: { color: '#8b5cf6' } },
                    { name: 'B轮', type: 'bar', stack: '总量', data: [150, 212, 201, 154], itemStyle: { color: '#f59e0b' } },
                    { name: 'C轮', type: 'bar', stack: '总量', data: [98, 77, 101, 99], itemStyle: { color: '#ef4444' } }
                ]
            };
            chart.setOption(option);
        },

        createGeoChart() {
            const chart = echarts.init(document.getElementById('geoChart'));
            const data = [
                { name: '北京', value: 45 },
                { name: '上海', value: 38 },
                { name: '深圳', value: 35 },
                { name: '杭州', value: 28 },
                { name: '成都', value: 25 },
                { name: '广州', value: 22 },
                { name: '南京', value: 18 },
                { name: '武汉', value: 15 }
            ];

            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    borderColor: 'rgba(0, 245, 255, 0.3)',
                    textStyle: { color: '#e0e6ed' }
                },
                series: [{
                    name: '创业活跃度',
                    type: 'pie',
                    radius: ['30%', '70%'],
                    center: ['50%', '50%'],
                    data: data,
                    roseType: 'radius',
                    label: { color: '#94a3b8', fontSize: 10 },
                    labelLine: { lineStyle: { color: '#334155' }, smooth: 0.2, length: 10, length2: 20 },
                    itemStyle: {
                        color: function(params) {
                            const colors = ['#0ea5e9', '#3b82f6', '#8b5cf6', '#f59e0b', '#ef4444', '#10b981', '#f97316', '#84cc16'];
                            return colors[params.dataIndex % colors.length];
                        },
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.3)'
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut'
                }]
            };
            chart.setOption(option);
        },

        createPredictionChart() {
            const chart = echarts.init(document.getElementById('predictionChart'));
            const option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(30, 41, 59, 0.95)',
                    borderColor: 'rgba(0, 245, 255, 0.3)',
                    textStyle: { color: '#e0e6ed' }
                },
                legend: {
                    data: ['历史数据', 'AI预测', '置信区间'],
                    textStyle: { color: '#94a3b8', fontSize: 10 },
                    top: 5
                },
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8', fontSize: 9 }
                },
                yAxis: {
                    type: 'value',
                    name: '成功率%',
                    nameTextStyle: { color: '#94a3b8', fontSize: 10 },
                    axisLine: { lineStyle: { color: '#334155' } },
                    axisLabel: { color: '#94a3b8', fontSize: 10 },
                    splitLine: { lineStyle: { color: '#1e293b', type: 'dashed' } }
                },
                series: [
                    { name: '历史数据', type: 'line', data: [68, 71, 73, 75, 72, 74, 76, 78, 75], lineStyle: { color: '#0ea5e9', width: 2 }, itemStyle: { color: '#0ea5e9' } },
                    { name: 'AI预测', type: 'line', data: [null, null, null, null, null, null, null, null, 75, 77, 79, 81], lineStyle: { color: '#f59e0b', width: 2, type: 'dashed' }, itemStyle: { color: '#f59e0b' } },
                    { name: '置信区间', type: 'line', data: [null, null, null, null, null, null, null, null, [75, 73, 77], [77, 74, 80], [79, 76, 82], [81, 78, 84]], lineStyle: { width: 0 }, areaStyle: { color: 'rgba(245, 158, 11, 0.2)' } }
                ]
            };
            chart.setOption(option);
        },

        updateDualAxisChart() {
            this.dualAxisAnalysis = '数据已更新：用户增长趋势持续向好，融资活跃度创新高。';
        },

        updateHeatmapData() {
            this.heatmapAnalysis = `${this.selectedTimeFrame}数据显示：行业分布格局发生新变化。`;
        },

        exportChart(chartType) {
            alert(`正在导出${chartType}图表数据...`);
        },

        startRealTimeUpdates() {
            setInterval(() => {
                this.totalFunding += Math.floor(Math.random() * 100);
                this.userGrowth += Math.floor(Math.random() * 50);
            }, 5000);
        }
    }
};

// AI聊天组件 - 流式输出
const Chat = {
    template: `
    <div class="min-h-screen py-8">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div class="image-placeholder h-40 rounded-2xl relative overflow-hidden">
                <img src="placeholder.svg" alt="待替换图片 - AI助手横幅" class="w-full h-full object-cover rounded-2xl opacity-30">
                <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 rounded-2xl">
                    <div class="text-center">
                        <h2 class="text-3xl font-bold neon-text mb-2">🤖 AI 创业顾问</h2>
                        <p class="text-cyan-300">智能分析 · 专业建议 · 实时响应</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="card">
                <div class="h-96 overflow-y-auto mb-6 p-4 bg-slate-800/50 rounded-xl border border-cyan-500/20" ref="chatContainer">
                    <div v-if="messages.length === 0" class="text-center text-slate-400 mt-20">
                        <div class="text-4xl mb-4">👋</div>
                        <p class="text-lg text-cyan-300 mb-2">您好！我是您的AI创业顾问</p>
                        <p class="text-slate-400">请告诉我您在创业过程中遇到的问题，我会为您提供专业建议。</p>
                    </div>
                    
                    <!-- 消息列表 -->
                    <div v-for="(message, index) in messages" :key="'msg-' + index" class="mb-4">
                        <!-- 用户消息 -->
                        <div v-if="message.type === 'user'" class="message-user">
                            {{ message.content }}
                        </div>
                        
                        <!-- AI消息 -->
                        <div v-else class="message-ai">
                            <div class="flex items-start">
                                <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0 shadow-lg">
                                    AI
                                </div>
                                <div class="flex-1">
                                    <!-- 打字中状态 -->
                                    <div v-if="message.isTyping" class="typing-text text-slate-300">
                                        <div v-html="formatAIResponse(message.displayContent)"></div><span class="typing-cursor text-cyan-400">|</span>
                                    </div>
                                    <!-- 完成状态 -->
                                    <div v-else class="ai-response-content text-slate-300" v-html="formatAIResponse(message.content)"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 加载状态 -->
                    <div v-if="loading" class="flex items-start mb-4">
                        <div class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3 flex-shrink-0 shadow-lg">
                            AI
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center">
                                <span class="text-cyan-300 mr-2">AI正在思考</span>
                                <div class="typing-dots">
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                    <div class="dot"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 输入区域 -->
                <div class="flex space-x-4">
                    <input 
                        v-model="currentMessage" 
                        @keyup.enter="sendMessage"
                        :disabled="loading"
                        class="input-field flex-1" 
                        placeholder="请输入您的创业问题..."
                        ref="messageInput"
                    >
                    <button 
                        @click="sendMessage" 
                        :disabled="loading || !currentMessage.trim()"
                        class="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span v-if="!loading">发送 🚀</span>
                        <span v-else class="flex items-center">
                            <div class="spinner mr-2"></div>
                            思考中
                        </span>
                    </button>
                </div>

                <!-- 快捷问题 -->
                <div class="mt-6">
                    <p class="text-sm text-slate-400 mb-3">💡 快捷问题:</p>
                    <div class="flex flex-wrap gap-2">
                        <button 
                            v-for="(question, idx) in quickQuestions" 
                            :key="'quick-' + idx"
                            @click="askQuestion(question)"
                            :disabled="loading"
                            class="text-sm bg-slate-700/50 hover:bg-slate-600/50 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-300 hover:text-cyan-200 px-3 py-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {{ question }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            messages: [],
            currentMessage: '',
            loading: false,
            typingIntervals: new Map(),
            quickQuestions: [
                '如何写商业计划书？',
                '怎样寻找投资人？',
                '创业团队如何组建？',
                '如何进行市场调研？',
                '产品定价策略有哪些？'
            ]
        }
    },
    methods: {
        async sendMessage() {
            const userMessage = this.currentMessage.trim();
            if (!userMessage || this.loading) return;

            this.messages.push({ type: 'user', content: userMessage, id: Date.now() });
            this.currentMessage = '';
            this.loading = true;
            this.scrollToBottom();

            const aiMessage = { type: 'ai', content: '', displayContent: '', isTyping: true, id: Date.now() + 1 };
            this.messages.push(aiMessage);
            this.scrollToBottom();

            try {
                await this.streamFromSSE(userMessage, (chunk) => {
                    aiMessage.displayContent += chunk;
                    this.$forceUpdate();
                    this.scrollToBottom();
                });
                aiMessage.isTyping = false;
                aiMessage.content = aiMessage.displayContent;
            } catch (e) {
                try {
                    const response = await fetch('/api/chat', {
                        method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                        body: JSON.stringify({ message: userMessage })
                    });
                    const data = await response.json();
                    aiMessage.content = (data && data.reply) ? data.reply : '抱歉，AI服务暂时不可用，请稍后再试。';
                    this.typeMessage(aiMessage);
                } catch (err) {
                    aiMessage.content = '抱歉，AI服务暂时不可用，请稍后再试。';
                    this.typeMessage(aiMessage);
                }
            } finally {
                this.loading = false;
                this.$forceUpdate();
                this.scrollToBottom();
            }
        },

        async streamFromSSE(message, onChunk) {
            const controller = new AbortController();
            const firstByteTimer = setTimeout(() => controller.abort(), 2500);

            const resp = await fetch('/api/chat/stream', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'text/event-stream' },
                body: JSON.stringify({ message }),
                signal: controller.signal
            });

            if (!resp.ok || !resp.body) {
                clearTimeout(firstByteTimer);
                throw new Error(`SSE响应异常: ${resp.status}`);
            }

            const reader = resp.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';
            let gotFirstChunk = false;

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                if (!gotFirstChunk) { gotFirstChunk = true; clearTimeout(firstByteTimer); }
                buffer += decoder.decode(value, { stream: true });

                const events = buffer.split('\n\n');
                buffer = events.pop() || '';
                for (const evt of events) {
                    const lines = evt.split('\n');
                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (!trimmed) continue;
                        if (trimmed.startsWith('data:')) {
                            const data = trimmed.substring(5).trim();
                            if (data === '[DONE]') return;
                            onChunk(data);
                        }
                    }
                }
            }
            clearTimeout(firstByteTimer);
        },

        typeMessage(message) {
            const fullText = message.content || '';
            let i = 0;
            const tick = () => {
                if (i < fullText.length) {
                    const ch = fullText[i++];
                    message.displayContent += ch;
                    this.$forceUpdate();
                    this.scrollToBottom();
                    let delay = 30;
                    if (ch === '\n') delay = 120; else if ('。！？'.includes(ch)) delay = 220; else if ('，、'.includes(ch)) delay = 90;
                    setTimeout(tick, delay);
                } else {
                    message.isTyping = false;
                    this.$forceUpdate();
                    this.scrollToBottom();
                }
            };
            tick();
        },

        segmentToParagraphs(text) {
            const normalized = (text || '').replace(/\r\n/g, '\n').trim();
            if (!normalized) return [];
            let blocks = normalized.split(/\n{2,}/).map(t => t.trim()).filter(Boolean);
            if (blocks.length <= 1) {
                if (/\n/.test(normalized)) {
                    blocks = normalized.split(/\n+/).map(t => t.trim()).filter(Boolean);
                } else {
                    const sentenceList = (normalized.match(/[^。！？!?.]+[。！？!?.]?/g) || []).map(s => s.trim()).filter(Boolean);
                    const grouped = [];
                    for (let i = 0; i < sentenceList.length; i += 2) {
                        grouped.push((sentenceList[i] + (sentenceList[i + 1] ? ' ' + sentenceList[i + 1] : '')).trim());
                    }
                    blocks = grouped.length ? grouped : [normalized];
                }
            }
            return blocks;
        },

        formatAIResponse(content) {
            if (!content) return '';
            const escape = (s) => s;
            return this.segmentToParagraphs(content)
                .map(p => {
                    let html = escape(p)
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-200 font-semibold">$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em class="text-cyan-300">$1</em>')
                        .replace(/^\s*[-•]\s+(.*)$/gm, '<span class="text-cyan-300 mr-2">•</span>$1')
                        .replace(/(\d+\.)\s+(.*)/g, '<span class="text-cyan-400 font-medium">$1</span> $2')
                        .replace(/\n/g, '<br>');
                    return `<p class="mb-3 leading-relaxed text-slate-300">${html}</p>`;
                })
                .join('');
        },

        scrollToBottom() {
            this.$nextTick(() => {
                const c = this.$refs.chatContainer;
                if (c) c.scrollTop = c.scrollHeight;
            });
        },

        askQuestion(q) {
            if (this.loading) return;
            this.currentMessage = q;
            this.sendMessage();
        }
    },
    mounted() {
        this.$nextTick(() => {
            if (this.$refs.messageInput) this.$refs.messageInput.focus();
        });
    },
    beforeUnmount() {
        this.typingIntervals.forEach(t => clearTimeout(t));
        this.typingIntervals.clear();
    }
};

// 关于页面组件 - 深色科技感
const About = {
    template: `
    <div class="min-h-screen py-16">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <div class="image-placeholder h-64 w-full rounded-2xl mb-8 relative overflow-hidden">
                    <img src="placeholder.svg" alt="待替换图片 - 团队照片" class="w-full h-full object-cover rounded-2xl opacity-30">
                    <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 rounded-2xl">
                        <div class="text-center text-white">
                            <h1 class="text-5xl font-bold mb-4 neon-text">关于我们</h1>
                            <p class="text-xl text-cyan-300">致力于用AI技术赋能创业者</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-12">
                <h2 class="text-3xl font-bold mb-6 text-cyan-100">🚀 项目背景</h2>
                <p class="text-lg text-slate-300 mb-4 leading-relaxed">
                    在当今快速变化的商业环境中，创业者面临着前所未有的挑战。市场信息复杂多变，
                    竞争日益激烈，如何在有限的资源下做出正确的商业决策成为创业成功的关键。
                </p>
                <p class="text-lg text-slate-300 mb-4 leading-relaxed">
                    AI创业助手应运而生，我们结合先进的人工智能技术和丰富的创业实践经验，
                    为创业者提供智能化的决策支持，让每一个有梦想的人都能获得专业的创业指导。
                </p>
            </div>

            <div class="mb-12">
                <h2 class="text-3xl font-bold mb-8 text-cyan-100 text-center">👥 核心团队</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="card text-center group">
                        <div class="image-placeholder h-32 w-32 mx-auto mb-6 rounded-full relative">
                            <img src="placeholder.svg" alt="待替换图片 - 团队成员头像" class="w-full h-full object-cover rounded-full opacity-40">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full group-hover:from-cyan-400/50 group-hover:to-blue-400/50 transition-all duration-300">
                                <span class="text-3xl">👨‍💻</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-cyan-100">技术负责人</h3>
                        <p class="text-slate-300 mb-2">全栈开发工程师</p>
                        <p class="text-sm text-slate-400">负责AI技术架构和产品开发</p>
                    </div>
                    <div class="card text-center group">
                        <div class="image-placeholder h-32 w-32 mx-auto mb-6 rounded-full relative">
                            <img src="placeholder.svg" alt="待替换图片 - 团队成员头像" class="w-full h-full object-cover rounded-full opacity-40">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full group-hover:from-purple-400/50 group-hover:to-pink-400/50 transition-all duration-300">
                                <span class="text-3xl">🎨</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-cyan-100">产品经理</h3>
                        <p class="text-slate-300 mb-2">用户体验设计师</p>
                        <p class="text-sm text-slate-400">专注于产品设计和用户体验优化</p>
                    </div>
                    <div class="card text-center group">
                        <div class="image-placeholder h-32 w-32 mx-auto mb-6 rounded-full relative">
                            <img src="placeholder.svg" alt="待替换图片 - 团队成员头像" class="w-full h-full object-cover rounded-full opacity-40">
                            <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full group-hover:from-emerald-400/50 group-hover:to-teal-400/50 transition-all duration-300">
                                <span class="text-3xl">💼</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-cyan-100">商业顾问</h3>
                        <p class="text-slate-300 mb-2">资深创业导师</p>
                        <p class="text-sm text-slate-400">拥有丰富的创业和投资经验</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <h2 class="text-3xl font-bold mb-8 text-cyan-100">⚡ 技术优势</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="flex items-start group">
                        <div class="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:border-cyan-400/50 transition-all duration-300">
                            <span class="text-cyan-400 font-bold text-lg">AI</span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2 text-cyan-100">先进AI算法</h3>
                            <p class="text-slate-300">基于大语言模型，提供个性化的创业建议和智能分析</p>
                        </div>
                    </div>
                    <div class="flex items-start group">
                        <div class="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:border-purple-400/50 transition-all duration-300">
                            <span class="text-purple-400 font-bold text-lg">📊</span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2 text-cyan-100">数据驱动</h3>
                            <p class="text-slate-300">实时市场数据分析，洞察行业趋势和投资机会</p>
                        </div>
                    </div>
                    <div class="flex items-start group">
                        <div class="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:border-emerald-400/50 transition-all duration-300">
                            <span class="text-emerald-400 font-bold text-lg">🚀</span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2 text-cyan-100">快速响应</h3>
                            <p class="text-slate-300">24/7在线服务，即时获得专业建议和解决方案</p>
                        </div>
                    </div>
                    <div class="flex items-start group">
                        <div class="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:border-orange-400/50 transition-all duration-300">
                            <span class="text-orange-400 font-bold text-lg">🎯</span>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2 text-cyan-100">精准匹配</h3>
                            <p class="text-slate-300">根据行业和阶段提供定制化的创业指导方案</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
};

// 全局AI助手快捷咨询组件
const AIAssistant = {
    template: `
    <div>
        <!-- 浮动AI助手图标 -->
        <div class="ai-assistant-float" @click="toggleModal" :class="{ 'animate-bounce': hasNewMessage }">
            <div class="icon">🤖</div>
        </div>

        <!-- AI聊天弹窗 -->
        <div v-if="showModal" class="ai-chat-modal" :class="{ closing: isClosing }">
            <!-- 弹窗头部 -->
            <div class="ai-chat-header">
                <h3>🤖 AI 创业顾问</h3>
                <div class="controls">
                    <button @click="minimizeModal" title="最小化">-</button>
                    <button @click="closeModal" title="关闭">✕</button>
                </div>
            </div>

            <!-- 聊天消息区域 -->
            <div class="ai-chat-messages" ref="messagesContainer">
                <div v-if="messages.length === 0" class="text-center text-slate-400 mt-8">
                    <div class="text-2xl mb-2">👋</div>
                    <p class="text-sm">我是您的AI创业顾问，有什么可以帮助您的吗？</p>
                </div>
                
                <div v-for="(message, index) in messages" :key="index" class="ai-chat-message" :class="message.type">
                    <div v-if="message.isTyping" class="typing-text" v-html="formatAI(message.displayContent)"></div>
                    <div v-else v-html="formatAI(message.content)"></div>
                </div>
                
                <div v-if="loading" class="ai-chat-message ai">
                    <div class="flex items-center">
                        <span>正在思考</span>
                        <div class="typing-indicator"></div>
                        <div class="typing-indicator" style="animation-delay: 0.2s"></div>
                        <div class="typing-indicator" style="animation-delay: 0.4s"></div>
                    </div>
                </div>
            </div>

            <!-- 输入区域 -->
            <div class="ai-chat-input">
                <input v-model="currentMessage" @keyup.enter="sendMessage" :disabled="loading" placeholder="输入您的创业问题..." ref="messageInput">
                <button @click="sendMessage" :disabled="loading || !currentMessage.trim()">{{ loading ? '...' : '发送' }}</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            showModal: false,
            isClosing: false,
            messages: [],
            currentMessage: '',
            loading: false,
            hasNewMessage: false,
            typingTimer: null
        }
    },
    methods: {
        toggleModal() { this.showModal ? this.closeModal() : this.openModal(); },
        openModal() {
            this.showModal = true; this.hasNewMessage = false;
            this.$nextTick(() => { if (this.$refs.messageInput) this.$refs.messageInput.focus(); });
        },
        closeModal() { this.isClosing = true; setTimeout(() => { this.showModal = false; this.isClosing = false; }, 300); },
        minimizeModal() { this.closeModal(); this.hasNewMessage = true; },
        async sendMessage() {
            if (!this.currentMessage.trim() || this.loading) return;
            const userMessage = this.currentMessage;
            this.messages.push({ type: 'user', content: userMessage });
            this.currentMessage = ''; this.loading = true; this.scrollToBottom();
            const aiMessage = { type: 'ai', content: '', displayContent: '', isTyping: true };
            this.messages.push(aiMessage); this.scrollToBottom();
            try {
                await this.streamFromSSE(userMessage, (chunk) => { aiMessage.displayContent += chunk; this.scrollToBottom(); });
                aiMessage.isTyping = false; aiMessage.content = aiMessage.displayContent;
            } catch (e) {
                try {
                    const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMessage }) });
                    const data = await response.json();
                    aiMessage.content = (data && data.reply) ? data.reply : '抱歉，AI服务暂时不可用，请稍后再试。';
                    this.startTypingEffect(aiMessage);
                } catch (err) {
                    aiMessage.content = '抱歉，AI服务暂时不可用，请稍后再试。';
                    this.startTypingEffect(aiMessage);
                }
            } finally { this.loading = false; }
        },
        async streamFromSSE(message, onChunk) {
            const controller = new AbortController();
            const firstByteTimer = setTimeout(() => controller.abort(), 2500);
            const resp = await fetch('/api/chat/stream', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'text/event-stream' }, body: JSON.stringify({ message }), signal: controller.signal });
            if (!resp.ok || !resp.body) { clearTimeout(firstByteTimer); throw new Error(`SSE响应异常: ${resp.status}`); }
            const reader = resp.body.getReader(); const decoder = new TextDecoder('utf-8'); let buffer = ''; let gotFirst = false;
            while (true) { const { value, done } = await reader.read(); if (done) break; if (!gotFirst) { gotFirst = true; clearTimeout(firstByteTimer); } buffer += decoder.decode(value, { stream: true }); const events = buffer.split('\n\n'); buffer = events.pop() || ''; for (const evt of events) { const lines = evt.split('\n'); for (const line of lines) { const t = line.trim(); if (!t) continue; if (t.startsWith('data:')) { const data = t.substring(5).trim(); if (data === '[DONE]') return; onChunk(data); } } } }
            clearTimeout(firstByteTimer);
        },
        startTypingEffect(message) { let index = 0; const text = message.content || ''; const speed = 25; const typeChar = () => { if (index < text.length) { message.displayContent += text[index++]; this.scrollToBottom(); this.typingTimer = setTimeout(typeChar, speed); } else { message.isTyping = false; this.scrollToBottom(); } }; typeChar(); },
        scrollToBottom() { this.$nextTick(() => { const container = this.$refs.messagesContainer; if (container) container.scrollTop = container.scrollHeight; }); },
        formatAI(content) {
            if (!content) return '';
            const escape = (s) => s;
            const normalized = content.replace(/\r\n/g, '\n');
            let blocks = normalized.split(/\n{2,}/).map(t => t.trim()).filter(Boolean);
            if (blocks.length <= 1) {
                if (/\n/.test(normalized)) { blocks = normalized.split(/\n+/).map(t => t.trim()).filter(Boolean); }
                else { const sentenceList = (normalized.match(/[^。！？!?.]+[。！？!?.]?/g) || []).map(s => s.trim()).filter(Boolean); const grouped = []; for (let i = 0; i < sentenceList.length; i += 2) { grouped.push((sentenceList[i] + (sentenceList[i + 1] ? ' ' + sentenceList[i + 1] : '')).trim()); } blocks = grouped.length ? grouped : [normalized.trim()]; }
            }
            return blocks.map(p => { let html = escape(p).replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyan-200 font-semibold">$1</strong>').replace(/\*(.*?)\*/g, '<em class="text-cyan-300">$1</em>').replace(/^\s*[-•]\s+(.*)$/gm, '<span class="text-cyan-300 mr-2">•</span>$1').replace(/(\d+\.)\s+(.*)/g, '<span class="text-cyan-400 font-medium">$1</span> $2').replace(/\n/g, '<br>'); return `<p class="mb-2 leading-relaxed text-slate-300">${html}</p>`; }).join('');
        }
    }
};

// 路由配置
const routes = [
    { path: '/', component: Home },
    { path: '/charts', component: Charts },
    { path: '/chat', component: Chat },
    { path: '/about', component: About },
    // 兜底：所有未匹配路径跳回首页
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({ history: createWebHashHistory(), routes });

// 创建Vue应用
const app = createApp({
    components: { AIAssistant },
    template: `
    <div>
        <!-- 导航栏 -->
        <nav class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl sticky top-0 z-50 backdrop-blur-lg border-b border-cyan-500/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex items-center">
                        <h1 class="neon-text text-2xl font-bold">AI 创业助手</h1>
                        <div class="ml-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    </div>
                    <div class="flex space-x-2">
                        <router-link to="/" class="nav-link">🏠 首页</router-link>
                        <router-link to="/charts" class="nav-link">📊 数据中心</router-link>
                        <router-link to="/chat" class="nav-link">🤖 AI 助手</router-link>
                        <router-link to="/about" class="nav-link">ℹ️ 关于</router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 路由视图 -->
        <router-view></router-view>

        <!-- 深色科技感页脚 -->
        <footer class="bg-gradient-to-r from-slate-900 to-slate-800 text-cyan-100 py-12 mt-16 border-t border-cyan-500/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-400"></div>
                        <span class="mx-4 text-lg font-semibold neon-text">AI 创业助手</span>
                        <div class="w-8 h-0.5 bg-gradient-to-l from-transparent to-cyan-400"></div>
                    </div>
                    <p class="text-cyan-300">让创业更智能，让梦想更可能。</p>
                    <div class="mt-4 flex justify-center space-x-6 text-sm text-cyan-400">
                        <span>AI驱动</span>
                        <span>实时分析</span>
                        <span>精准建议</span>
                    </div>

                    <!-- 创业指导成果区块（从 index.html 移入到运行时模板） -->
                    <div class="mt-10 max-w-5xl mx-auto text-left">
                        <h3 class="text-xl font-semibold text-cyan-200 mb-6">创业指导成果</h3>
                        <div class="space-y-6">
                            <div class="flex flex-col md:flex-row items-center gap-6 bg-slate-800/40 hover:bg-slate-800/60 transition rounded-xl p-5 border border-cyan-500/10 shadow-lg">
                                <img src="./placeholder.svg" alt="项目封面" class="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover ring-1 ring-cyan-500/20 flex-shrink-0">
                                <div class="flex-1">
                                    <h4 class="text-cyan-100 text-lg font-bold">项目·星尘引擎</h4>
                                    <p class="text-cyan-300/90 mt-1">从0到1全程加速，3天完成MVP，7天拿下首批付费用户，单词条上线即获全网关注，融资邀约如雪片飞来。</p>
                                    <ul class="mt-3 grid grid-cols-2 gap-2 text-cyan-400 text-sm">
                                        <li>⚡ 72小时极速成型</li>
                                        <li>🎯 转化率飙至 19.8%</li>
                                        <li>📈 首周 GMV 50万+</li>
                                        <li>🌍 覆盖 12 个国家</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row items-center gap-6 bg-slate-800/40 hover:bg-slate-800/60 transition rounded-xl p-5 border border-cyan-500/10 shadow-lg">
                                <img src="./placeholder.svg" alt="项目封面" class="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover ring-1 ring-cyan-500/20 flex-shrink-0">
                                <div class="flex-1">
                                    <h4 class="text-cyan-100 text-lg font-bold">项目·量子商栈</h4>
                                    <p class="text-cyan-300/90 mt-1">AI 驱动选品 + 智能投放，一周爆款出圈，单品点击破百万，广告 ROAS 稳定 8x，利润像开了挂。</p>
                                    <ul class="mt-3 grid grid-cols-2 gap-2 text-cyan-400 text-sm">
                                        <li>🧠 智能定价与人群放大</li>
                                        <li>📊 广告 ROAS 8.1x</li>
                                        <li>💎 复购率 32%</li>
                                        <li>🚀 日均新增 5k+ 用户</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex flex-col md:flex-row items-center gap-6 bg-slate-800/40 hover:bg-slate-800/60 transition rounded-xl p-5 border border-cyan-500/10 shadow-lg">
                                <img src="./placeholder.svg" alt="项目封面" class="w-48 h-48 md:w-56 md:h-56 rounded-lg object-cover ring-1 ring-cyan-500/20 flex-shrink-0">
                                <div class="flex-1">
                                    <h4 class="text-cyan-100 text-lg font-bold">项目·流光工坊</h4>
                                    <p class="text-cyan-300/90 mt-1">自动化增长引擎接入后，冷启动即热卖，口碑裂变像风暴席卷，后台数据一路“起飞”。</p>
                                    <ul class="mt-3 grid grid-cols-2 gap-2 text-cyan-400 text-sm">
                                        <li>🔥 首日破圈热度 Top 1</li>
                                        <li>💬 自传播触达 100万+</li>
                                        <li>💹 付费转化翻 3.7 倍</li>
                                        <li>🛠️ 运营自动化 85%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <p class="text-xs text-cyan-400/70 mt-4">以上为示例效果展示，图片可替换为实际项目封面（placeholder.svg）。</p>
                    </div>
                </div>
            </div>
        </footer>

        <!-- 全局AI助手 -->
        <AIAssistant />
    </div>
    `
});

app.use(router);
app.mount('#app');
