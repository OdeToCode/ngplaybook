(function(module) {

    var errorProneController = function(alerting) {
        var model = this;

        model.alertTypes = alerting.alertTypes;
        model.alertMessage = "";
        model.alertType = model.alertTypes[0];

        model.createAlert = function() {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertMessage = "";
            model.alertType = model.alertTypes[0];
        };

        model.createException = function() {
            throw new Error("Something has gone terribly wrong!");
        };
    };

    module.controller("errorProneController", errorProneController);

}(angular.module("diagnostics")))