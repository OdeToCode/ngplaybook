(function (module) {

    var resultController = function (user) {
        this.user = user;
    };

    module.controller("resultController", resultController);

}(angular.module("forms")));
