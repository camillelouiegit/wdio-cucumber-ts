import { When } from "@wdio/cucumber-framework";
import Homepage from "../../src/pages/polymer.home.page";
import ProductsPage from "../../src/pages/polymer.products.page";
import Checkoutpage from "../../src/pages/polymer.checkout.page";
import SauceDemoHomePage from "../../src/pages/saucedemo.home.page";
import SauceDemoProductsPage from "../../src/pages/saucedemo.checkout.page";

// ------------- Sauce Demo Start ------------- //
When(
  /^I login using (.+) and (.+)$/,
  async (username: string, password: string) => {
    await SauceDemoHomePage.enterUsername(username);
    await SauceDemoHomePage.enterPassword(password);
    await SauceDemoHomePage.clickLogin();
  }
);

When(/^I add to cart the items$/, async () => {
  await SauceDemoProductsPage.addItemsToCart();
});

When(/^I view my Cart$/, async () => {
  await SauceDemoProductsPage.viewCart();
});

When(/^I checkout the items in the cart$/, async () => {
  await SauceDemoProductsPage.checkOutCart();
});

When(/^I input details in the checkout form$/, async () => {
  await SauceDemoProductsPage.inputForm();
});

When(/^I click continue$/, async () => {
  await SauceDemoProductsPage.continueCheckOut();
});

When(/^I click finish$/, async () => {
  await SauceDemoProductsPage.finishCheckOut();
});
// ------------- Sauce Demo End ------------- //

// ------------- Polymer Shop Start ------------- //
When(/^I navigate to (.+) section$/, async (option: string) => {
  await Homepage.chooseSection(option);
});

When(/^I select a random shirt$/, async () => {
  await ProductsPage.selectTShirt();
});

When(/^I click Add To Cart$/, async () => {
  await ProductsPage.clickAddToCart();
});

When(/^I click View Cart$/, async () => {
  await ProductsPage.clickViewCart();
});

When(/^I click SHOP$/, async () => {
  await Homepage.clickShop();
});

When(/^I click Checkout button in the Cart$/, async () => {
  await Checkoutpage.clickCheckOut();
});

When(
  /^I enter all required fields in the Checkout form and click Place Order$/,
  async () => {
    await Checkoutpage.setCheckOutForm();
  }
);
// ------------- Polymer Shop End ------------- //
