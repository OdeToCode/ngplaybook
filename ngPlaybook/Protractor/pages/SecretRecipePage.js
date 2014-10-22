var SecretRecipePage = function() {

    this.go = function() {
        browser.get(SecretRecipePage.url);
    };

};

SecretRecipePage.url = "http://localhost:17648/Apps/security/shell.html#/secret";

module.exports = SecretRecipePage;