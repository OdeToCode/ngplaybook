(function (module) {

    var username = function ($http, alerting, $q, $compile) {

        var processResponse = function (response) {
            if (response.data) {
                return $q.when(true);
            } else {
                return $q.reject(false);
            }
        };

        var validateUsername = function (value) {
            return $http.get("/api/namevalidation?name=" + encodeURI(value))
                        .catch(alerting.errorHandler("Could not validate the username on the server"))
                        .then(processResponse);

        };

        var setupDom = function(input, form, scope) {
            var inputName = input.attr("name");
            var formName = form.$name;
            var pending = "<div ng-if='" + formName + "." + inputName + ".$pending'>Checking name...</div>";
            input.parent().append($compile(pending)(scope));

        };

        return {
            require: ["ngModel", "^form"],
            link: function (scope, element, attributes, controllers) {
                var ngModel = controllers[0];
                var ngForm = controllers[1];
                ngModel.$asyncValidators.username = validateUsername;
                setupDom(element, ngForm, scope);
            }
        };

    };

    module.directive("username", username);

}(angular.module("forms")));
