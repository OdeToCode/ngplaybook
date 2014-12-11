(function(module) {

    module.config(function ($provide) {
        $provide.decorator("$interpolate", function ($delegate, $log) {

            var serviceWrapper = function () {
                var bindingFn = $delegate.apply(this, arguments);
                if (angular.isFunction(bindingFn) && arguments[0]) {
                    return bindingWrapper(bindingFn, arguments[0].trim());
                }
                return bindingFn;
            };

            var bindingWrapper = function (bindingFn, bindingExpression) {
                return function () {
                    var result = bindingFn.apply(this, arguments);
                    var trimmedResult = result.trim();
                    var log = trimmedResult ? $log.info : $log.warn;
                    log.call($log, bindingExpression + " = " + trimmedResult);
                    return result;
                };
            };

            angular.extend(serviceWrapper, $delegate);
            return serviceWrapper;

        });
    });

}(angular.module("common")));
