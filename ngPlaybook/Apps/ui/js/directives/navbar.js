(function (module) {

    var navbar = function () {
        return {
            templateUrl: "/apps/ui/templates/nav.html"
        };
    };

    module.directive("navbar", navbar);

}(angular.module("ui")));