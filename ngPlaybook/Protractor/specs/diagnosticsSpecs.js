var DiagnosticsPage = require("../pages/DiagnosticsPage");

describe("The diagnostics application", function () {

    var page = new DiagnosticsPage();

    it("should launch without an error", function () {
        page.go();
        expect(page.getBrand()).toBe("Ode To Food");
    });

});