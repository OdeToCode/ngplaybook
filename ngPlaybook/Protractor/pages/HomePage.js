var HomePage = function () {

    this.go = function() {
        browser.get("http://localhost:17648/Apps/security/shell.html#/");
    };

    this.login = function (username, password) {
        element(by.name("username")).sendKeys(username);
        element(by.name("password")).sendKeys(password);
        element(by.name("loginForm")).submit();
    };

    this.getUsername = function () {
        var username = element(by.binding("nav.user.username"));
        return username.getText();
    };

};

module.exports = HomePage;