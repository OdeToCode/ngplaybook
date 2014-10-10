(function(module) {

    var sessionStorage = function($window) {

        var store = $window.sessionStorage;
        var add = function(key, value) {
            value = angular.toJSON(value);
            store.setItem(key, value);
        };

        var get = function(key) {
            var value = store.getItem(key);
            if (value) {
                value = angular.fromJson(value);
            }
            return value;
        };

        var remove = function(key) {
            store.removeItem(key);
        };

        return {
            add: add,
            get: get,
            remove: remove
        };
    };

    module.factory("sessionStorage", sessionStorage);

}(angular.module("common")));