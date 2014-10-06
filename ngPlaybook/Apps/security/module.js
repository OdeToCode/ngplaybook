(function() {

    var app = angular.module("security", ["common", "ngRoute", "ngAnimate"]);

    var routes = [
        {
            url: "/",
            settings: { templateUrl: "templates/home.html" }
        },
        {
            url: "/secret",
            settings: { templateUrl: "templates/secret.html"}
        }
    ];

    var registerRoutes = function($routeProvider) {
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    };

    app.config(registerRoutes);

}());