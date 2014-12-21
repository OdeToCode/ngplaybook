(function (module) {

    var Employee = function (firstName, lastName, rating) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rating = rating;
    };

    module.value("Employee", Employee);

}(angular.module("ui")));
