(function(module) {

    var loginController = function(oauth, currentUser, alerting, loginRedirect) {
        var model = this;

        model.username = "";
        model.password = "";
        model.user = currentUser.profile;

        model.login = function(form) {
            if (form.$valid) {
                oauth.login(model.username, model.password)
                     .then(loginRedirect.redirectPreLogin)
                     .catch(alerting.errorHandler("Could not login"));
                model.password = "";
            }
        }

        model.signOut = function() {
            oauth.logout();
        };
    };

    module.controller("loginController", loginController);

}(angular.module("security")));