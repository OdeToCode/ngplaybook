(function(module) {

    var alerts = function(alerting) {
        return {
            restrict: "AE",
            templateUrl: "/apps/common/templates/alerts.html",
            link: function(scope) {
                scope.currentAlerts = alerting.currentAlerts;
            }
        };
    };

    module.directive("alerts", alerts);

}(angular.module("common")));