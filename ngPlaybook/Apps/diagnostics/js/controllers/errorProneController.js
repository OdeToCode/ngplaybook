(function(module) {

    var errorProneController = function(alerting) {
        var model = this;

        model.alertTypes = [ "success", "info", "warning", "danger" ];

        model.alertMessage = "";
        model.alertType = "";

        model.createAlert = function() {
            alerting.addAlert(model.alertType, model.alertMessage);
            model.alertMessage = "";
            model.alertType = "";
        };

        model.createException = function() {
            throw new Error("Something has gone terribly wrong!");
        };
    };

    module.controller("errorProneController", errorProneController);

}(angular.module("diagnostics")))