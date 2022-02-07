import { Then } from "@wdio/cucumber-framework";
import Homepage from "../../src/pages/polymer.home.page";
import ProductsPage from "../../src/pages/polymer.products.page";
import Checkoutpage from "../../src/pages/polymer.checkout.page";
import SauceDemoHomePage from "../../src/pages/saucedemo.home.page";
import SaucedemoProductsPage from "../../src/pages/saucedemo.checkout.page";

// ------------- Sauce Demo Start ------------- //
Then(/^I should view header title \"([^\"]*)\"$/, async (title: string) => {
  await SauceDemoHomePage.verifyPageHeader(title);
});

Then(/^I should view items added to my Cart$/, async () => {
  await SaucedemoProductsPage.verifyAddedToCart();
});

Then(/^I should view the checkout form$/, async () => {
  await SaucedemoProductsPage.verifyCheckOutForm();
});

Then(/^I should view checkout details$/, async () => {
  await SaucedemoProductsPage.verifyCartListCheckOut();
});

Then(/^I should view success message$/, async () => {
  await SaucedemoProductsPage.verifySuccessMessage();
});

// ------------- Sauce Demo End ------------- //

// ------------- Polymer Shop Start ------------- //
Then(/^I should view all shirt List$/, async () => {
  await Homepage.verifyHeaderTitle();
});

Then(/^I should view the details of the shirt$/, async () => {
  await ProductsPage.verifyShirtName();
});

Then(/^I should view the added Tshirt$/, async () => {
  await ProductsPage.verifyInCart();
});

Then(/^I should view the Checkout form$/, async () => {
  await Checkoutpage.verifyCheckOutForm();
});

Then(/^I should view \"([^\"]*)\" message$/, async (text: string) => {
  await Checkoutpage.verifyCheckOutSuccess(text);
});
// ------------- Polymer Shop End ------------- //
