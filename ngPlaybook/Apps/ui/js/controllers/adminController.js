
(function (module) {

    var adminController = function (Employee, $modal) {
        var model = this;

        model.employees = [
            new Employee("Scott", "Allen", 1),
            new Employee("Alex", "Lifeson", 4),
            new Employee("Lawrence P.", "Waterhouse", 4),
            new Employee("Zoey", "Thibodale", 2),
            new Employee("Glory", "Altimira", 3)
        ];

        model.promote = function(employee) {
            for (var i = 0; i < model.employees.length; i++) {
              if (employee === model.employees[i]) {
                  model.employees.splice(i, 1);
                  break;
              }  
            };
        };

    };

    module.controller("adminController", adminController);

}(angular.module("ui")));
