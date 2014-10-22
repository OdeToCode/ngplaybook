(function (module) {

    var USERKEY = "utoken";

    var initializeUser = function (localStorage) {
        var user = {
            username: "",
            token: "",
            get loggedIn() {
                return this.token ? true : false;
            }
        };

        var localUser = localStorage.get(USERKEY);
        if (localUser) {
            user.username = localUser.username;
            user.token = localUser.token;
        }

        return user;
    };

    var saveUser = function (user, localStorage) {
        localStorage.add(USERKEY, user);
    };

    var removeUser = function(localStorage) {
        localStorage.remove(USERKEY);
    };


    var authorization = function () {

        var url = "/login";

        this.setUrl = function (newUrl) {
            url = newUrl;
        };

        this.$get = function ($http, formEncode, localStorage) {

            var user = initializeUser(localStorage);

            var processToken = function (username) {
                return function (response) {
                    user.username = username;
                    user.token = response.data.access_token;
                    saveUser(user, localStorage);
                    $http.defaults.headers.common["Authorization"] = "Bearer " + user.token;
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
                user.username = "";
                user.token = "";
                removeUser(localStorage);
            };

            return {
                user: user,
                login: login,
                logout: logout
            };
        }
    };

    module.config(function ($provide) {
        $provide.provider("authorization", authorization);
    });

}(angular.module("common")));