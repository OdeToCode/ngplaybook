
(function (module) {

    var createChart = function () {
        var chart = {};
        chart.type = "PieChart";

        chart.data = [
            ["Type", "Amount"],
            ["Food", 34],
            ["Salaries", 12],
            ["Lawsuits", 20],
            ["Drinks", 23],
            ["Silverware", 12]
        ];

        chart.options = {
            height: 300,
            width: 600,
            backgroundColor: "#222222",
            legend: {textStyle: {color: "white", fontSize: 16}},
            animation: {
                duration: 500,
                easing: "out"
            }
        };
        return chart;
    };

    var addData = function (chart) {
        for (var i = 1; i < chart.data.length; i++) {
            chart.data[i][1] = Math.round(Math.random() * 50) + 5;
        }
    };

    var costController = function ($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function () {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("costController", costController);

}(angular.module("ui")));
