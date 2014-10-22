var HomePage = function () {

    this.go = function() {
        browser.get(HomePage.url);
    };

    this.login = function (username, password) {
        element(by.name("username")).sendKeys(username);
        element(by.name("password")).sendKeys(password);
        element(by.name("loginForm")).submit();
    };

    this.getUsername = function () {
        var username = element(by.binding("login.user.username"));
        return username.getText();
    };

};

HomePage.url = "http://localhost:17648/Apps/security/shell.html#/";

module.exports = HomePage;