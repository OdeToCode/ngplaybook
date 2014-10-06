(function(module) {

    var navController = function(authorization) {
        var model = this;

        model.username = "";
        model.password = "";
        model.user = authorization.user;
        model.login = function(form) {
            if (form.$valid) {
                authorization.login(model.username, model.password);
            } 
        }
    };

    module.controller("navController", navController);

}(angular.module("security")));