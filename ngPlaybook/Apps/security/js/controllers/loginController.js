(function(module) {

    var loginController = function(authorization, errors, loginRedirect) {
        var model = this;

        model.username = "";
        model.password = "";
        model.user = authorization.user;

        model.login = function(form) {
            if (form.$valid) {
                authorization.login(model.username, model.password)
                             .then(loginRedirect.redirectPreLogin)
                             .catch(errors.catcher("Could not login"));
            }
        }

        model.signOut = function() {
            authorization.logout();
        };
    };

    module.controller("loginController", loginController);

}(angular.module("security")));