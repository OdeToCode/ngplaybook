(function (module) {

    var watcherFor = function (form, name) {
        return function () {
            if (name && form[name]) {                
                return form[name].$invalid;
            }
        };
    };

    var updaterFor = function (element) {
        return function (hasError) {
            if (hasError) {
                element.removeClass("has-success")
                       .addClass("has-error");
            } else {
                element.addClass("has-success")
                       .removeClass("has-error");
            }
        };
    };

    var setupDom = function (element) {
        var input = element[0].querySelector("input, textarea, select, otf-rating");
        var type = input.getAttribute("type");
        var name = input.getAttribute("name");
        if (type !== "checkbox" && type !== "radio") {
            input.classList.add("form-control");
        }

        var label = element[0].querySelector("label");
        label.classList.add("control-label");
        return name;
    };

    var addMessages = function(form, element, name, $compile, scope) {
        var messages = "<div class='help-block' ng-messages='" +
                        form.$name + "." + name + ".$error" +
                        "' ng-messages-include='templates/messages.html'><div>";
        element.append($compile(messages)(scope));
    };

    var link = function ($compile) {
        return function(scope, element, attributes, form) {
            var name = setupDom(element);
            addMessages(form, element, name, $compile, scope);
            scope.$watch(watcherFor(form, name), updaterFor(element));
        }
    };

    var forminput = function ($compile) {

        return {
            restrict: "A",
            require: "^form",
            link: link($compile)
        };

    };

    module.directive("forminput", forminput);

}(angular.module("forms")));
