module.exports = function () {
    this.When(/^I login to perilwise website using username "([^"]*)" and password "([^"]*)"$/, function(username, password) {
        return helpers.loadPage(page.perilwiseLogin.url).then(function() {
            return page.perilwiseLogin.login(username, password);
        });
    });
    this.Then(/^I should see "([^"]*)" in the welcome message$/, function(welcomeMessage) {
        var welcomeNameItem = page.perilwiseDashboard.elements.welcomeNameItem;
        return driver.wait(until.elementsLocated(welcomeNameItem), 10000).then(function (elements) {
            expect(elements.length).to.not.equal(0);
            driver.findElement(welcomeNameItem).getText().then(function (text) {
                expect(text).to.equal(welcomeMessage);
            });
        });
    });
    this.Then(/^I should see "([^"]*)" as an error message$/, function(errorMessage) {
        var errorMessageItem = page.perilwiseLogin.elements.errorMessageItem;
        return driver.wait(until.elementsLocated(errorMessageItem), 10000).then(function (elements) {
            expect(elements.length).to.not.equal(0);
            driver.findElement(errorMessageItem).getText().then(function (text) {
                expect(text).to.equal(errorMessage);
            });
        });
    });
};
