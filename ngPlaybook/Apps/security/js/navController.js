(function(module) {

    var navController = function(authorization, errors) {
        var model = this;

        model.username = "";
        model.password = "";
        model.user = authorization.user;
        model.message = "";
        model.login = function(form) {
            if (form.$valid) {
                authorization.login(model.username, model.password)
                             .catch(errors.catcher("Could not login"));
            }
        }
    };

    module.controller("navController", navController);

}(angular.module("security")));