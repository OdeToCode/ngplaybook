
(function (module) {

    var customersController = function () {
        var data = [];
        for (var i = 1; i < 360; i++) {
            var date = new Date(2014, 0);
            date.setDate(i);
            data.push([date, Math.round(Math.random() * 150)]);
        };
        this.data = data;
    };

    module.controller("customersController", customersController);

}(angular.module("ui")));
