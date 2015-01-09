(function (module) {

    var findInputInside = function(element) {
        var result = element.find("input");
        if (result.length < 1) {
            result = element.find("select");
            if (result.length < 1) {
                result = element.find("textarea");
            }
        }
        if (result.length < 1) {
            return null;
        }
        return result;
    };

    var formGroup = function () {

        return {
            restrict: "C",
            require: "^form",
            link: function (scope, element, attributes, form) {
                var input = findInputInside(element);
                console.log(input.length);
            }
        };

    };

    module.directive("formGroup", formGroup);

}(angular.module("forms")));
