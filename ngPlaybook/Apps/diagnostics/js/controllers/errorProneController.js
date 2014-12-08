(function(module) {

    var errorProneController = function() {
        var model = this;

        model.raiseError = function() {
            throw new Error("Something has gone terribly wrong!");
        };
    };

    module.controller("errorProneController", errorProneController);

}(angular.module("diagnositcs")))