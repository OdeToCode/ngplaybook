var config = require("./config");

var DiagnosticsPage = function () {

    this.go = function () {
        browser.get(DiagnosticsPage.url);
    };

    this.getBrand = function() {
        return element(by.css(".navbar-brand")).getText();
    };

};

DiagnosticsPage.url = config.baseUrl + "diagnostics/shell.html#/";

module.exports = DiagnosticsPage;