(function(module) {

    var addToken = function(currentUser, $q) {

        return {
            request: function(config) {
                if (currentUser.profile.token) {
                    config.headers.Authorization = "Bearer " + currentUser.profile.token;
                }
                return $q.when(config);
            }
        };
    };

    module.factory("addToken", addToken);
    module.config(function($httpProvider) {
        $httpProvider.interceptors.push("addToken");
    });

})(angular.module("common"));