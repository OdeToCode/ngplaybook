var config = require("./config");

var SecretRecipePage = function () {

    this.go = function() {
        browser.get(SecretRecipePage.url);
    };

};

SecretRecipePage.url = config.baseUrl + "security/shell.html#/secret";

module.exports = SecretRecipePage;