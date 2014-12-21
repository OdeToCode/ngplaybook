
(function (module) {

    var createChart = function () {
        var chart = {};
        chart.type = "ColumnChart";

        chart.data = [
            ["Injuries", "Count", {role:"style"}],
            ["Major Burns", 0, ""],
            ["Toxic Inhalations", 0, ""],
            ["Lacerations", 0, ""],
            ["Discoball Contusions", 0, ""],
            ["Muscle Pulls", 0, ""],
            ["Food poisonings", 0, ""],
            ["Hallucinations", 0, ""]
        ];

        chart.options = {
            hAxis: { textStyle: { color: "#ffffff"}},
            vAxis: { title: "Injury Type", textStyle:{color:"#ffffff"} },
            height: 400,
            backgroundColor: "#222222",
            legend: { textStyle: { color: "white", fontSize: 16 } },
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
            if (chart.data[i][1] > 40) {
                chart.data[i][2] = "red";
            }
        }
    };

    var injuriesController = function ($timeout) {
        var self = this;
        self.chart = createChart();
        $timeout(function () {
            self.showChart = true;
            addData(self.chart);
        }, 750);
    };

    module.controller("injuriesController", injuriesController);

}(angular.module("ui")));
