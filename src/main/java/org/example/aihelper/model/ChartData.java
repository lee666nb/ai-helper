package org.example.aihelper.model;

/**
 * 复杂图表数据模型 - 支持多种创业数据分析
 */
public class ChartData {
    private String[] trendLabels;
    private int[] trendData;
    private String[] pieLabels;
    private int[] pieData;
    private String[] barLabels;
    private int[] barData;

    private String[] geoLabels;
    private int[] geoData;

    private int[][] heatmapData;

    private String[] sankeyNodes;
    private int[][] sankeyLinks;

    private int[] realtimeData;

    public ChartData() {}

    public String[] getTrendLabels() { return trendLabels; }
    public void setTrendLabels(String[] trendLabels) { this.trendLabels = trendLabels; }

    public int[] getTrendData() { return trendData; }
    public void setTrendData(int[] trendData) { this.trendData = trendData; }

    public String[] getPieLabels() { return pieLabels; }
    public void setPieLabels(String[] pieLabels) { this.pieLabels = pieLabels; }

    public int[] getPieData() { return pieData; }
    public void setPieData(int[] pieData) { this.pieData = pieData; }

    public String[] getBarLabels() { return barLabels; }
    public void setBarLabels(String[] barLabels) { this.barLabels = barLabels; }

    public int[] getBarData() { return barData; }
    public void setBarData(int[] barData) { this.barData = barData; }

    public String[] getGeoLabels() { return geoLabels; }
    public void setGeoLabels(String[] geoLabels) { this.geoLabels = geoLabels; }

    public int[] getGeoData() { return geoData; }
    public void setGeoData(int[] geoData) { this.geoData = geoData; }

    public int[][] getHeatmapData() { return heatmapData; }
    public void setHeatmapData(int[][] heatmapData) { this.heatmapData = heatmapData; }

    public String[] getSankeyNodes() { return sankeyNodes; }
    public void setSankeyNodes(String[] sankeyNodes) { this.sankeyNodes = sankeyNodes; }

    public int[][] getSankeyLinks() { return sankeyLinks; }
    public void setSankeyLinks(int[][] sankeyLinks) { this.sankeyLinks = sankeyLinks; }

    public int[] getRealtimeData() { return realtimeData; }
    public void setRealtimeData(int[] realtimeData) { this.realtimeData = realtimeData; }
}

