(function (module) {

    var confirmPromotion = function ($modal) {
        return function (employee) {
            var options = {
                templateUrl: "templates/confirmPromotion.html",
                controller: function($scope) {
                    this.employee = employee;
                },  
                controllerAs: "model"
            };

            return $modal.open(options).result;
        };
    };

    module.factory("confirmPromotion", confirmPromotion);

}(angular.module("ui")));
