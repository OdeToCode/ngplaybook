
(function (module) {

    var otfRating2Controller = function ($scope) {

        this.setRange = function (min, max) {
            $scope.stars = new Array(max - min + 1);
        };

        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        };

        $scope.mouseout = function () {
            $scope.preview = -1;
        };

        $scope.click = function ($index) {
            $scope.value = $index + 1;
        };

        $scope.styles = function ($index) {
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value,
                "starpreview": $index <= $scope.preview
            };
        };
    };

    var otfRating2 = function () {

        return {
            require: "otfRating2",
            scope: {
                value: "="
            },
            templateUrl: "templates/rating2.html",
            controller: "otfRating2Controller",
            link: function (scope, element, attributes, controller) {
                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");
                controller.setRange(min, max);
            }
        };
    };

    module.controller("otfRating2Controller", otfRating2Controller);
    module.directive("otfRating2", otfRating2);

}(angular.module("ui")));