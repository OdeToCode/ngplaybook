(function (module) {

    var authorization = function () {

        var self = this;
        var url = "/login";

        self.setUrl = function (newUrl) {
            url = newUrl;
        };

        self.$get = function ($http, formEncode, sessionStorage) {
            var user = {
                username: "",
                token: "",
                get loggedIn() {
                    return this.token ? true : false;
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

                $http.post(url, data, configuration).then(function (response) {
                    // todo process response
                });
            };

            return {
                user: user,
                login: login
            };
        }
    };

    module.config(function ($provide) {
        $provide.provider("authorization", authorization);
    });

}(angular.module("common")));