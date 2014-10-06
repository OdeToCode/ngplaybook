var HomePage = function () {

    browser.get("http://localhost:17648/Apps/security/shell.html#/");

    this.login = function(username, password) {
        element(by.name("username")).sendKeys(username);
        element(by.name("password")).sendKeys(password);
        element(by.name("loginForm")).submit();
    };

    this.isLoggedIn = function() {
        return element(by.name("loginForm")) ? false : true;
    };

};

describe("The security application", function () {

    var page;
    beforeEach(function() {
        page = new HomePage();
    });

    it("start as an anonymous user", function() {
        expect(page.isLoggedIn()).toBe(false);
    });

    it("should allow the user to login", function() {
        page.login("sallen", "password");
        expect(page.isLoggedIn()).toBe(true);
    });

});