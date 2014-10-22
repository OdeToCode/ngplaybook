var LoginPage = function() {

    this.go = function() {
        browser.get(LoginPage.url);
    };

    this.login = function(username, password) {
        element(by.name("username")).sendKeys(username);
        element(by.name("password")).sendKeys(password);
        element(by.name("loginForm")).submit();
    };

};

LoginPage.url = "http://localhost:17648/Apps/security/shell.html#/login";

module.exports = LoginPage;