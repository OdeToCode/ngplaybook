var HomePage = function () {

    browser.get("http://localhost:17648/Apps/security/shell.html#/");

    this.login = function(username, password) {
        element(by.name("username")).sendKeys(username);
        element(by.name("password")).sendKeys(password);
        element(by.name("loginForm")).submit();
    };

    this.getUsername = function() {
        var username = element(by.css(".navbar-right"));
        var text = username.getText();
        return text;
    };

    this.isAnonymouse = function() {
        return element(by.name("loginForm")) != undefined;
    };

    this.waitForLogin = function () {
        browser.wait(function () {
            var username = element(by.binding("nav.user.username"));
            if (username.isPresent()) {
                var text = username.getText();
                if (text) {
                    console.log("TEXT IS " + text);
                    return true;
                }
            }
            console.log("NO TEXT");
            return false;
        });
    };

    this.isLoggedIn = function (name) {

        var username = element(by.css(".navbar-right"));
        console.log(username);
        var text = username.getText();
        return text == name;
    };

};

describe("The security application", function () {

    var page;
    beforeEach(function() {
        page = new HomePage();
    });

    it("should start as an anonymous user", function() {
        expect(page.getUsername()).toBe("");
    });

    it("should allow the user to login", function() {
        page.login("sallen", "password");
        page.waitForLogin();
        expect(page.getUsername()).toBe("sallen");
    });

});