(function(module) {

    module.config(function($provide) {
        $provide.decorator("$interpolate", function($delegate, $log) {

            var serviceThunk = function() {
                var innerFunction = $delegate.apply(this, arguments);
                if (innerFunction) {
                    return bindingWrapper(innerFunction, arguments);
                }
            };

            var bindingWrapper = function(realBindingFunction, bindingArgs) {
                return function() {
                    var result = realBindingFunction.apply(this, arguments);
                    var log = result ? $log.info : $log.warn;
                    log.call($log, " interpolation of " + bindingArgs[0].trim() + " is " + result.trim());
                    return result;
                };
            };

            angular.extend(serviceThunk, $delegate);
            return serviceThunk;
        });
    });

}(angular.module("common")));