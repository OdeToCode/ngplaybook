
(function (module) {

    var otfRatingController = function($scope) {

        var ngModel;

        this.initialize = function(min, max, modelController) {
            ngModel = modelController;
            ngModel.$render = this.render;

            $scope.stars = new Array(max - min + 1);
        };

        this.render = function () {
            $scope.value = ngModel.$viewValue;
        };

        $scope.mouseover = function($index) {
            $scope.preview = $index;
        };

        $scope.mouseout = function() {
            $scope.preview = -1;
        };

        $scope.click = function ($index) {
            ngModel.$setTouched();
            ngModel.$setViewValue($index + 1);
            ngModel.$render();
        };

        $scope.styles = function($index) {
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value, 
                "starpreview": $index <= $scope.preview
            };
        };
    };

    var otfRating = function () {

        return {
            require: ["otfRating", "ngModel"],
            scope: {
 
            },
            templateUrl: "templates/rating.html",
            controller: "otfRatingController",
            link: function (scope, element, attributes, controllers) {
                var ratingController = controllers[0];
                var modelController = controllers[1];

                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");
                ratingController.initialize(min, max, modelController);
            }
        };
    };

    module.controller("otfRatingController", otfRatingController);
    module.directive("otfRating", otfRating);

}(angular.module("forms")));
