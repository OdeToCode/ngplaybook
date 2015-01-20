(function (module) {

    module.directive("physicsBehavior", function (Physics) {
        return {
            restrict: "E",
            require: "^physicsCanvas",
            scope: {
                name: "@"
            },
            link: function (scope, element, attributes, canvas) {
                canvas.add(Physics.behavior(scope.name));
            }
        };
    });

}(angular.module("integration")));
