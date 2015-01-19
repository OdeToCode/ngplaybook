(function (module) {

    var knob = function () {

        return {
            scope: {
                min: "@", 
                max:"@", 
                width:"@", 
                change: "&"
            },
            link: function (scope, element) {
                element.knob({
                    min: scope.min,
                    max: scope.max,
                    width: scope.width,
                    change: function (value) {
                        scope.change({ value: value });
                    }
                });
            }
        };

    };

    module.directive("knob", [knob]);

}(angular.module("integration")));
