const { $, expect } = require("@wdio/globals");
const Page = require("./page");

const element = {
  fieldUsername: $("#user-name"),
  fieldPassword: $("#password"),
  buttonLogin: $("#login-button"),
  errorLockedOutUser: (message) => $(`//h3[text()="${message}"]`),
  errorEmptyUsername: (warning) => $(`//h3[text()="${warning}"]`),
};

class LoginPage extends Page {
  async login(username) {
    await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
    await element.fieldUsername.setValue(username);
    await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    await element.buttonLogin.click();
  }

  async validateLockedOutUserError(message) {
    await element
      .errorLockedOutUser(message)
      .waitForDisplayed({ timeout: 2500 });
    await expect(element.errorLockedOutUser(message)).toBeDisplayed();
  }

  async validateEmptyUsername(warning) {
    await element.errorEmptyUsername(warning).waitForDisplayed({
      timeout: 2500,
    });
    await expect(element.errorEmptyUsername(warning)).toBeDisplayed();
  }

  open() {
    return super.open("/");
  }
}

module.exports = new LoginPage();
