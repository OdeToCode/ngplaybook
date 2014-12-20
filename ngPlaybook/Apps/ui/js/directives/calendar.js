
(function (module) {

    var drawChart = function(element, values) {
        var data = new google.visualization.DataTable();
        data.addColumn({ type: 'date', id: 'Date' });
        data.addColumn({ type: 'number', id: 'Count' });
        data.addRows(values);
        var chart = new google.visualization.ChartWrapper({
            chartType: 'Calendar',
            dataTable: data,
            options: {
                title: "Customers By Day",
                height: 400
            }
        });
        chart.draw(element);
    };

    var calendar = function (googleChartApiPromise) {

        return {
            scope: {
                data: "="
            },
            link: function (scope, element) {
                scope.$watch("data", function() {
                    googleChartApiPromise.then(function() {
                        if (scope.data) {
                            drawChart(element[0], scope.data);
                        }
                    });
                });
            }
        };

    };

    module.directive("calendar", calendar);

}(angular.module("ui")));
