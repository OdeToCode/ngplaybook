(function (module) {

    module.directive("physicsCanvas", function (Physics) {

        var preLink = function (scope, element) {

            var canvas = element[0].querySelector("canvas");
            var renderer = Physics.renderer("canvas", {
                el: canvas,
                width: scope.width,
                height: scope.height
            });

            Physics(function (world) {
                scope.world = world;
                scope.world.add(renderer);
            });
        };

        var postLink = function (scope) {
            Physics.util.ticker.on(function (time) {
                scope.world.step(time);
            });

            scope.world.on('step', function () {
                scope.world.render();
            });

            Physics.util.ticker.start();
        };

        return {
            restrict: "E",
            transclude: true,
            templateUrl: "templates/physicsCanvas.html",
            scope: {
                width: "@",
                height: "@"
            },
            controller: function ($scope) {           
                this.add = function(thing) {
                    $scope.world.add(thing);
                }
            },
            compile: function() {
                return {
                    pre: preLink,
                    post: postLink
                }
            }
        };
    });

}(angular.module("integration")));
