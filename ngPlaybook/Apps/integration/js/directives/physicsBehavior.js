(function (module) {

    module.directive("physicsBehavior", function (Physics, world) {
        return {
            restrict: "E",
            scope: {
                name: "@"
            },
            link: function (scope) {
                world.add(Physics.behavior(scope.name));
            }
        };
    });

}(angular.module("integration")));
