(function (module) {

    module.directive("physicsEdgeDetection", function (Physics) {
        return {
            restrict: "E",
            require: "^physicsCanvas",
            scope: {
                minX: "@",
                minY: "@",
                maxX: "@",
                maxY: "@",
                restitution: "@"
            },
            link: function (scope, element, attributes, canvas) {
                var bounds = Physics.aabb(parseInt(scope.minX),
                                          parseInt(scope.minY),
                                          parseInt(scope.maxX),
                                          parseInt(scope.maxY));
                canvas.add(Physics.behavior('edge-collision-detection', {
                    aabb: bounds,
                    restitution: parseFloat(scope.restitution)
                }));
            }
        };
    });


}(angular.module("integration")));