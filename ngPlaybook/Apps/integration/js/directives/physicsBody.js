
(function (module) {

    module.directive("physicsBody", function (Physics) {
        return {
            restrict: "E",
            require: "^physicsCanvas",
            scope: {
                options: "=",
                body: "=",
                type: "@"
            },
            link: function (scope, element, attributes, canvas) {
                scope.body = Physics.body(scope.type, scope.options);
                canvas.add(scope.body);
            }
        };
    });

}(angular.module("integration")));
