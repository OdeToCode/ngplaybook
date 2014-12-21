(function (module) {

    var customersController = function ($timeout) {
        var self = this;
        var data = [];
        for (var i = 1; i < 360; i++) {
            var date = new Date(2014, 0);
            var number = Math.round(Math.random() * 50) + 50;
            if (i % 7 === 4 || i % 7 === 5) {
                number += 50;
            }
            date.setDate(i);
            data.push([date, number]);
        };

        $timeout(function() {
            self.showChart = true;
        }, 750);

        self.data = data;
    };

    module.controller("customersController", customersController);

}(angular.module("ui")));
