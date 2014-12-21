(function (module) {

    var promotionModalOptionsFor = function (employee) {
        return {
            templateUrl: "templates/confirmPromotion.html",
            controller: function($scope, employee) {
                $scope.emmployee = employee;
            },
            controllerAs: "model",
            resolve: {
                employee: employee
            }
        };
    };

    module.value("promotionModalOptionsFor", promotionModalOptionsFor);

}(angular.module("module")));
