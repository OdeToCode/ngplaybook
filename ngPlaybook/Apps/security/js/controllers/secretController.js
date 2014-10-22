(function(module) {

    var secretController = function (recipes) {

        var model = this;

        model.recipe = null;

        recipes.getSecret().then(function(recipe) {
            model.recipe = recipe;
        });

    };

    module.controller("secretController", secretController);

}(angular.module("security")));