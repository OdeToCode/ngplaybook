var HomePage = require("../pages/HomePage");

describe("The security application", function () {

    var page = new HomePage();

    it("should start as an anonymous user", function () {
        page.go();
        expect(page.getUsername()).toBe("");
    });

    it("should allow the user to login", function () {
        page.login("sallen", "sallen");
        expect(page.getUsername()).toContain("sallen");
    });

    it("should allow the user to sign out", function() {
        page.signOut();
        expect(page.getUsername()).toBe("");
    });

});
