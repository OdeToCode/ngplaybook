(function (module) {

    var oauth = function () {

        var url = "/login";

        this.setUrl = function (newUrl) {
            url = newUrl;
        };

        this.$get = function ($http, formEncode, currentUser) {

            var processToken = function (username) {
                return function (response) {
                    currentUser.profile.username = username;
                    currentUser.profile.token = response.data.access_token;
                    currentUser.save();
                    return username;
                }
            };

            var login = function (username, password) {

                var configuration = {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                };

                var data = formEncode({
                    username: username,
                    password: password,
                    grant_type: "password"
                });

                return $http.post(url, data, configuration).then(processToken(username));
            };

            var logout = function() {
                currentUser.profile.username = "";
                currentUser.profile.token = "";
                currentUser.remove();
            };

            return {
                login: login,
                logout: logout
            };
        }
    };

    module.config(function ($provide) {
        $provide.provider("oauth", oauth);
    });

}(angular.module("common")));