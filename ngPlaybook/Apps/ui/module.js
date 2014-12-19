(function () {

    var module = angular.module("ui", ["common", "ui.router"]);

    module.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/dashboard/overall");
        $stateProvider
            .state("dashboard", { url: "/dashboard", templateUrl: "templates/dashboard.html" })
                .state("overll", { parent:"dashboard", url: "/overall", templateUrl: "templates/overall.html" })
                .state("inventory", { parent:"dashboard", url: "/inventory", templateUrl: "templates/inventory.html" })
                .state("injuries", { parent: "dashboard", url: "/injuries", templateUrl: "templates/injuries.html" })
                .state("costs", { parent:"dashboard", url: "/costs", templateUrl: "templates/costs.html" })
            .state("admin", { url: "/admin", templateUrl: "templates/admin.html" });
    });
}());