(function (module) {

    module.factory("world", function (Physics) {
        var world = Physics({
            timestep: 1000.0 / 16.0
    });

        world.on("step", function () {
            world.render(); 
        });

        return world;
    });
   
}(angular.module("integration")));
