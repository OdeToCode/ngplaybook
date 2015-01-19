(function (module) {

    module.factory("ticker", function (Physics, world) {
        var start = function () {
            Physics.util.ticker.on(function (time) {
                world.step(time);
            });
        };

        return {
            start: start
        };
    });
    
}(angular.module("integration")));
