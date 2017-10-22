module.exports = {
    url: 'https://www.perilwise.com/',
    elements: {
        signInItem: by.linkText('Sign In'),
        usernameItem: by.name('email'),
        passwordItem: by.name('password'),
        loginItem: by.xpath("(//button[@type='button'])[2]"),
        errorMessageItem: by.xpath('/html/body/div[1]/div/div/div/div[2]/p')
    },
    login: function(username, password) {
        var signInButton = page.perilwiseLogin.elements.signInItem;
        var usernameField = page.perilwiseLogin.elements.usernameItem;
        var passwordField = page.perilwiseLogin.elements.passwordItem;
        driver.findElement(signInButton).click();
        driver.wait(until.elementsLocated(usernameField), 10000);
        driver.findElement(usernameField).sendKeys(username, selenium.Key.ENTER);
        driver.findElement(passwordField).sendKeys(password, selenium.Key.ENTER);
        driver.findElement(page.perilwiseLogin.elements.loginItem).click();
    }
};
