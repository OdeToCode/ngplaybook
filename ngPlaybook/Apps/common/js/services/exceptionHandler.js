(function(module) {

    module.config(function($decorator) {
        $decorator.decorate("$exceptionHandler", function($delegate, alerting) {
            return function(exception, cause) {
                $delegate(exception, cause);
                alerting.addError(exception.message);
            };
        });
    });

}(angular.module("common")));