(function () {

    var app = angular.module("forms", ["common", "ngRoute", "ngAnimate", "ngMessages"]);

    var routes = [
        { url: "/", settings: { templateUrl: "templates/home.html" } },
        { url: "/results", settings: {templateUrl: "templates/results.html"}}
    ];

    var registerRoutes = function($routeProvider) {
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    };

    app.config(registerRoutes);

}());