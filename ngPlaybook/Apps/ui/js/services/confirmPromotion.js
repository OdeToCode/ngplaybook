(function (module) {

    var confirmPromotion = function ($modal) {
        return function (employee) {
            var options = {
                templateUrl: "templates/confirmPromotion.html",
                controller: function($scope, employee) {
                    this.employee = employee;
                },  
                controllerAs: "model",
                resolve: {
                    employee: function() {
                        return employee;
                    }
                }
            };

            return $modal.open(options).result;
        };
    };

    module.factory("confirmPromotion", confirmPromotion);

}(angular.module("ui")));
