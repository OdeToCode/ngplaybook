(function (module) {

    module.controller("movingObjectController", function (Physics) {
        var model = this;

        model.box1 = null;
        model.box2 = null;

        model.kick = function () {
            model.box1.applyForce({ x: 0.1, y: -0.2 });
            model.box2.applyForce({ x: -0.1, y: -0.2 });
        };

        model.resize = function (value) {
            model.box1.geometry.width = value;
            model.box1.geometry.height = value;
            model.box1.view = null;
            model.box1.recalc();
        };
    });

}(angular.module("integration")));
