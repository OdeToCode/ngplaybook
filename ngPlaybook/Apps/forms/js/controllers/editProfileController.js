
(function (module) {

    var editProfileController = function(user, $location) {
        this.user = user;

        this.submit = function(isValid) {
            if (isValid) {
                $location.path("/results");
            }
        };
    };

    module.controller("editProfileController", editProfileController);

}(angular.module("forms")));
