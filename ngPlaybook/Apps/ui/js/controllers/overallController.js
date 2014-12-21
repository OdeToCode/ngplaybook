(function (module) {

    var createChart = function() {
        var chart = {};
        chart.type = "Gauge";

        chart.data = [
            ["Label", "Value"],
            ["Turnover", 0],
            ["Fire Risk", 0],
            ["Complaints", 0],
            ["Staleness", 0],
            ["Advertising", 0],
            ["Returns", 0],
            ["Accidents", 0],
            ["Parking", 0],
            ["Waste", 0]
        ];

        chart.options = {
            width: 500, height: 400,
            redFrom: 90, redTo: 100,
            yellowFrom: 75, yellowTo: 90,
            minorTicks: 5,
            animation: {
                duration: 2000,
                easing: "out"
            }
        }; 
        return chart;
    };

    var addData = function(chart) {
        var data = [85, 55, 99, 22, 50, 22, 23, 65, 19];
        for (var i = 1; i < chart.data.length; i++) {
            chart.data[i][1] = data[i - 1];
        }
    };

    var overallController = function ($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function() {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("overallController", overallController);

}(angular.module("ui")));
