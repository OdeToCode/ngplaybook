(function (module) {

    module.directive("physicsEdgeDetection", function (Physics, world) {
        return {
            restrict: "E",
            scope: {
                minX: "@",
                minY: "@",
                maxX: "@",
                maxY: "@",
                restitution: "@"
            },
            link: function (scope) {
                var bounds = Physics.aabb(parseInt(scope.minX),
                    parseInt(scope.minY),
                    parseInt(scope.maxX),
                    parseInt(scope.maxY));
                world.add(Physics.behavior('edge-collision-detection', {
                    aabb: bounds,
                    restitution: parseFloat(scope.restitution)
                }));
            }
        };
    });


}(angular.module("integration")));