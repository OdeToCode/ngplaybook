(function () {

    var module = angular.module("ui", ["common", "ui.router"]);

    module.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/dashboard");
        $stateProvider.state("deashboard", { url: "/dashboard", templateUrl: "templates/dashboard.html" });
    });

}());