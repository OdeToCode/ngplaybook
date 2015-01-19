
(function (module) {

    var tubular = function () {

        return {
            link: function (scope, element, attributes) {
                attributes.$observe("tubular", function(value) {
                    if (value) {
                        element.tubular({ videoId: "e-UpuP4_iYA" });
                    }
                });
                
            }
        };
    };

    module.directive("tubular", tubular);

}(angular.module("integration")));
