(function (module) {

    module.directive("physicsCanvas", function (Physics, world, ticker) {
        return {
            restrict: "E",
            transclude: true,
            template: "<canvas width={{width}} height={{height}}></canvas><div ng-transclude></div>",
            scope: {
                width: "@",
                height: "@"
            },
            link: function (scope, element) {
                var canvas = element.find("canvas");
                var renderer = Physics.renderer('canvas', {
                    el: canvas[0],
                    width: scope.width,
                    height: scope.height
                });
                world.add(renderer);
                canvas.attr("style", "");
                ticker.start();
            }
        };
    });

}(angular.module("integration")));
