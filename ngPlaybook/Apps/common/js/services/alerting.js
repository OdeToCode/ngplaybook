(function(common) {

    var alerting = function($timeout) {

        var currentAlerts = [];
        var alertTypes = ["info", "warning", "success", "danger"];
        
        var addWarning = function (message) {
            addAlert("warning", message);
        };

        var addInfo = function(message) {
            addAlert("info", message);
        };

        var addDanger = function(message) {
            addAlert("danger", message);
        };

        var addSuccess = function(message) {
            addAlert("success", message);
        };

        var addAlert = function(type, message) {
            var alert = { type: type, message: message };
            currentAlerts.push(alert);

            $timeout(function() {
                removeAlert(alert);
            }, 10000);
        };

        var removeAlert = function(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] == alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        };

        var errorHandler = function(description) {
            return function() {
                addDanger(description);
            };
        };


        return {
            removeAlert: removeAlert,
            addAlert: addAlert,
            errorHandler: errorHandler,
            addInfo: addInfo,
            addWarning: addWarning,
            currentAlerts: currentAlerts,
            alertTypes: alertTypes,
            addSuccess: addSuccess,
            addDanger: addDanger
        };

    };

    common.factory("alerting", alerting);

}(angular.module("common")))