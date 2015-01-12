
(function (module) {

    var otfRating = function () {

        return {
            scope: {
                value: "="
            },
            link: function (scope, element, attributes) {

                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");

                element.addClass("btn-group");

                scope.$watch("value", function (newValue) {
                    element.empty();
                    for (var i = 0; i < newValue; i++) {
                        element.append("<button class='btn btn-default btn-xs'><span class='glyphicon glyphicon-star'></span></button>");
                    }
                });

                element.on("click", function () {
                    scope.$apply(function () {
                        if (scope.value < max) {
                            scope.value += 1;
                        } else {
                            scope.value = min;
                        }
                    });
                });

                scope.$on("destroy", function () {
                    element.off("click");
                });
            }
        };
    };

    module.directive("otfRating", otfRating);

}(angular.module("ui")));