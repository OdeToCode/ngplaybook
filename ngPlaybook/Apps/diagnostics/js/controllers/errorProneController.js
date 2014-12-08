(function(module) {

    var errorProneController = function(alerting) {
        var model = this;

        model.alertTypes = [ "success", "info", "warning", "danger" ];

        model.alertMessage = "";
        model.alertType = "";

        model.createAlert = function() {
            var alert = { type: model.alertType, message: model.alertMessage };
            alerting.addAlert(alert);
            model.alertMessage = "";
            model.alertType = "";
        };

        model.createException = function() {
            throw new Error("Something has gone terribly wrong!");
        };
    };

    module.controller("errorProneController", errorProneController);

}(angular.module("diagnostics")))