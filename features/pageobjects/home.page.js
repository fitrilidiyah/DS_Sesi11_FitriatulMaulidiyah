const { $, expect } = require("@wdio/globals");
const Page = require("./page");

const element = {
  iconCart: $(".shopping_cart_link"),
  iconSort: $(".product_sort_container"),
  appLogo: $(".app_logo"),
  btnRemove: $("#remove-sauce-labs-backpack"),
  iconBurger: $(".bm-icon.visual_failure"),
};

class HomePage extends Page {
  async validateHomePage() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(element.iconCart).toBeDisplayed();
  }

  async validateProblemUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(element.iconSort).not.toBeSelected();
  }

  async validateErrorUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(element.btnRemove).not.toBeClickable();
  }

  async validateVisualUser() {
    await expect(browser).toHaveUrlContaining("/inventory.html");
    await expect(element.iconBurger).toBeDisplayed();
  }

  open() {
    return super.open("/inventory.html");
  }
}

module.exports = new HomePage();
