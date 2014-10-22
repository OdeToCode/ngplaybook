var SecretPage = require("../pages/SecretRecipePage");
var LoginPage = require("../pages/LoginPage.js");

describe("The security application", function () {

    var secret = new SecretPage();
    var login = new LoginPage();

    it("should redirect to login page if trying to view a secret as anonymous user", function () {
        secret.go();
        expect(browser.getCurrentUrl()).toBe(LoginPage.url);
    });

    it("should go back to the secret after a login", function () {
        login.login("sallen", "sallen");
        expect(browser.getCurrentUrl()).toBe(SecretPage.url);
    });

});