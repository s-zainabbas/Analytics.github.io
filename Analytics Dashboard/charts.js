function initCharts() {
    // Initialize all charts with empty data
    createBarChart([]);
    createLineChart([]);
    createPieChart([]);
    createScatterPlot([]);
}

function updateCharts() {
    // Update all charts with filtered data
    createBarChart(filteredData);
    createLineChart(filteredData);
    createPieChart(filteredData);
    createScatterPlot(filteredData);
}

function toggleChartView(chartId) {
    const container = document.getElementById(chartId);
    container.classList.toggle('hidden');
}

function createBarChart(data) {
    // Bar chart implementation
    // ...
}

function createLineChart(data) {
    // Line chart implementation
    // ...
}

function createPieChart(data) {
    // Pie chart implementation
    // ...
}

function createScatterPlot(data) {
    // Scatter plot implementation
    // ...
}