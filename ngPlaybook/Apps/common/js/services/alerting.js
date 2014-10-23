(function(common) {

    var alerting = function($timeout) {

        var currentAlerts = [];
        
        var addWarning = function (message) {
            var alert = { type: "warning", message: message };
            addAlert(alert);
        };

        var addInformation = function(message) {
            var alert = { type: "info", message: message };
            addAlert(alert);
        };

        var addDanger = function(message) {
            var alert = { type: "danger", message: message };
            addAlert(alert);
        };

        var addAlert = function(alert) {
            currentAlerts.push(alert);
            $timeout(function() {
                for (var i = 0; i < currentAlerts.length; i++) {
                    if (currentAlerts[i] == alert) {
                        currentAlerts.splice(i, 1);
                        break;
                    }
                }
            }, 10000);
        };

        var errorHandler = function(description) {
            return function() {
                addDanger(description);
            };
        };


        return {
            errorHandler: errorHandler,
            addInformation: addInformation,
            addWarning: addWarning,
            currentAlerts: currentAlerts
        };

    };

    common.factory("alerting", alerting);

}(angular.module("common")))