/*
Copyright (C) eastWillow2017
*/

var Chart_Display_Text_Flag = false;
Chart.pluginService.register({
    beforeDatasetDraw: function (chart) {
        var width = chart.chart.width,
            height = chart.chart.height - chart.chart.legend.height,
            ctx = chart.chart.ctx,
            data = chart.chart.data.datasets[0].data[0] / (chart.chart.data.datasets[0].data.reduce(
                function getSum(total, num) {
                    return total + num;
                }));

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "rgb(54, 162, 235)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.imageSmoothingQuality = "high";

        if (Chart_Display_Text_Flag) {
            var text = chart.chart.data.datasets[0].data[0];
        } else {
            var text = Math.round(data * 100.0) + '%';
        }
        var textX = Math.round(width / 2),
            textY = Math.round(height / 2);


        ctx.fillText(text, textX, textY);
        ctx.save();
    }
});

var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
};
var chartOptions = {
    responsive: true,
    legend: {
        display: true,
        labels: {
            fontSize: 21,
            fontStyle: ''
        },
        position: 'bottom',
        onClick: null,
        reverse: true
    },
    tooltips: {
        titleFontSize: 21,
        bodyFontSize: 21,
        enabled: false
    },
    cutoutPercentage: 70
}

var chartLabels = [
    "水量"
];

var chartbackgroundColor = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)"
];

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 1],
            backgroundColor: chartbackgroundColor
        }],
        labels: chartLabels
    },
    options: chartOptions
});

var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 1],
            backgroundColor: chartbackgroundColor
        }],
        labels: chartLabels
    },
    options: chartOptions
});

var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [1, 1],
            backgroundColor: chartbackgroundColor
        }],
        labels: chartLabels
    },
    options: chartOptions
});