(function (module) {

    var startsWith = function () {

        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attributes, ngModel) {

                var value = attributes.startsWith;

                ngModel.$validators.startsWith = function (modelValue) {
                    if (value && modelValue[0] !== value) {
                        return false;
                    }
                    return true;
                };
            }
        };

    };

    module.directive("startsWith", startsWith);

}(angular.module("forms")));
