var config = require("./config");

var LoginPage = function () {

    this.go = function() {
        browser.get(LoginPage.url);
    };

    this.login = function(username, password) {
        element(by.css(".container [name=username]")).sendKeys(username);
        element(by.css(".container [name=password]")).sendKeys(password);
        element(by.css(".container [name=loginForm]")).submit();
    };

};

LoginPage.url = config.baseUrl + "security/shell.html#/login";

module.exports = LoginPage;