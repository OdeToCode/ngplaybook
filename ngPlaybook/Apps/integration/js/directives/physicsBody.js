
(function (module) {

    module.directive("physicsBody", function (Physics, world) {
        return {
            restrict: "E",
            scope: {
                options: "=",
                body: "=",
                type: "@"
            },
            link: function (scope) {
                scope.body = Physics.body(scope.type, scope.options);
                world.add(scope.body);
            }
        };
    });

}(angular.module("integration")));
