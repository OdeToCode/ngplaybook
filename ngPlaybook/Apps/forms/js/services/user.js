(function (module) {

    var user = function () {
        return {
            username: "",
            email: "",
            website: "",
            phone: "",
            birthdate: "",
            age: "",
            feelLike: "",
            color: "",
            cuisine: "",
            bio: "",
            terms: "",
            status: "",
            rating: 1
        };
    };

    module.factory("user", user);

}(angular.module("forms")));
