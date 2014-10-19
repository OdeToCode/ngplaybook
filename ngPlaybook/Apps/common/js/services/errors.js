(function(common) {

    var errors = function() {

        var catcher = function(description) {
            return function() {
                // .. TODO
            };
        };

        return {
            catcher: catcher
        };

    };

    common.factory("errors", errors);

}(angular.module("common")))