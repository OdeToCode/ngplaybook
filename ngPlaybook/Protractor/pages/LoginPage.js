var config = require("./config");

var LoginPage = function () {

    this.go = function() {
        browser.get(LoginPage.url);
    };

    this.login = function(username, password) {
        $(".container [name=username]").sendKeys(username);
        $(".container [name=password]").sendKeys(password);
        $(".container [name=loginForm]").submit();
    };

};

LoginPage.url = config.baseUrl + "security/shell.html#/login";

module.exports = LoginPage;