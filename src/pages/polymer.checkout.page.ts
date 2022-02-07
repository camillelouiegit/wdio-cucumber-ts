import checkoutdata from "../resources/checkout.data.json";
import config from "../resources/config";
import TestBase from "../utils/testbase";

class checkoutPage extends TestBase {
  // ------------- Page Elements -------------
  // Shadow DOM - Common
  get shopapp() {
    return browser.$("shop-app");
  }
  get appheader() {
    return this.shopapp.shadow$("app-header");
  }

  // Common header title
  get ironpages() {
    return this.shopapp.shadow$("iron-pages");
  }
  get ironselected() {
    return this.ironpages.$(".iron-selected");
  }
  get grid() {
    return this.ironselected.shadow$(".grid");
  }
  get list() {
    return this.grid.$("li:nth-child(2)");
  }

  // Select Ladies T-shirt
  get selectGoogleShirt() {
    return this.list.$("a");
  }
  get shirtContent() {
    return this.ironselected.shadow$("#content");
  }
  get shirtDetails() {
    return this.shirtContent.$(".detail");
  }
  get shirtName() {
    return this.shirtDetails.$("h1");
  }

  // Add to Cart
  get shopbutton() {
    return this.shirtDetails.$("shop-button");
  }
  get btnAddToCart() {
    return this.shopbutton.$("button");
  }

  // View Cart
  get cartModal() {
    return this.shopapp.shadow$("shop-cart-modal");
  }
  get layout() {
    return this.cartModal.shadow$("shop-button");
  }
  get btnViewCart() {
    return this.layout.$("#viewCartAnchor");
  }
  get shopcartMainFrame() {
    return this.ironselected.shadow$(".main-frame");
  }
  get shopcartSubsection() {
    return this.shopcartMainFrame.$(".subsection:nth-child(2)");
  }
  get shopcartList() {
    return this.shopcartSubsection.$(".list");
  }
  get shopcartItem() {
    return this.shopcartList.$("shop-cart-item");
  }
  get shopcartFlex() {
    return this.shopcartItem.shadow$(".flex");
  }
  get shopcartName() {
    return this.shopcartFlex.$(".name");
  }
  get shirtNameInCart() {
    return this.shopcartName.$("a");
  }

  // Checkout
  get checkoutBox() {
    return this.shopcartSubsection.$(".checkout-box");
  }
  get checkOutBox() {
    return this.checkoutBox.$("shop-button");
  }
  get btncheckOut() {
    return this.checkOutBox.$('a[href="/checkout"]');
  }
  get checkoutPages() {
    return this.shopcartMainFrame.$("#pages");
  }
  get checkoutIronSelected() {
    return this.checkoutPages.$(".iron-selected");
  }
  get checkoutIronForm() {
    return this.checkoutIronSelected.$("#checkoutForm");
  }
  get checkoutForm() {
    return this.checkoutIronForm.$("form");
  }
  get checkoutSubGrid() {
    return this.checkoutForm.$(".subsection.grid");
  }
  get checkoutAccountSection() {
    return this.checkoutSubGrid.$("section");
  }
  get checkoutPaymentSection() {
    return this.checkoutSubGrid.$("section:nth-child(2)");
  }

  // Account Information
  // Email
  get checkoutInputRowEmail() {
    return this.checkoutAccountSection.$(".row.input-row");
  }
  get checkoutShopInputEmail() {
    return this.checkoutInputRowEmail.$("shop-input");
  }
  get checkoutAccountEmail() {
    return this.checkoutShopInputEmail.$("#accountEmail");
  }

  // Phone Number
  get checkoutInputRowPhoneNumber() {
    return this.checkoutAccountSection.$(".row.input-row:nth-child(3)");
  }
  get checkoutShopInputPhoneNumber() {
    return this.checkoutInputRowPhoneNumber.$("shop-input");
  }
  get checkoutAccountPhone() {
    return this.checkoutShopInputPhoneNumber.$("#accountPhone");
  }

  // Ship Address
  get checkoutInputRowShipAdd() {
    return this.checkoutAccountSection.$(".row.input-row:nth-child(5)");
  }
  get checkoutShopInputShipAdd() {
    return this.checkoutInputRowShipAdd.$("shop-input");
  }
  get checkoutShipAddress() {
    return this.checkoutShopInputShipAdd.$("#shipAddress");
  }

  // Ship City
  get checkoutInputRowShipCity() {
    return this.checkoutAccountSection.$(".row.input-row:nth-child(6)");
  }
  get checkoutShopInputShipCity() {
    return this.checkoutInputRowShipCity.$("shop-input");
  }
  get checkoutShipCity() {
    return this.checkoutShopInputShipCity.$("#shipCity");
  }

  // Ship State
  get checkoutInputRowShipState() {
    return this.checkoutAccountSection.$(".row.input-row:nth-child(7)");
  }
  get checkoutShopInputShipState() {
    return this.checkoutInputRowShipState.$("shop-input");
  }
  get checkoutShipState() {
    return this.checkoutShopInputShipState.$("#shipState");
  }

  // Ship Zip
  get checkoutInputRowShipZip() {
    return this.checkoutAccountSection.$(".row.input-row:nth-child(7)");
  }
  get checkoutShopInputShipZip() {
    return this.checkoutInputRowShipZip.$("shop-input:nth-child(2)");
  }
  get checkoutShipZip() {
    return this.checkoutShopInputShipZip.$("#shipZip");
  }

  // Ship Country
  get checkoutInputRowShipCountry() {
    return this.checkoutAccountSection.$(".column");
  }
  get checkoutShopInputShipCountry() {
    return this.checkoutInputRowShipCountry.$("shop-select");
  }
  get checkoutShipCountry() {
    return this.checkoutShopInputShipCountry.$("#shipCountry");
  }

  // Payment Method
  // Card Name
  get checkoutInputRowCardName() {
    return this.checkoutPaymentSection.$(".row.input-row");
  }
  get checkoutShopInputCardName() {
    return this.checkoutInputRowCardName.$("shop-input");
  }
  get checkoutCardName() {
    return this.checkoutShopInputCardName.$("#ccName");
  }

  // Card Number
  get checkoutInputRowCardNumber() {
    return this.checkoutPaymentSection.$(".row.input-row:nth-child(3)");
  }
  get checkoutShopInputCardNumber() {
    return this.checkoutInputRowCardNumber.$("shop-input");
  }
  get checkoutCardNumber() {
    return this.checkoutShopInputCardNumber.$("#ccNumber");
  }

  // Card Expiry
  //Month
  get checkoutInputRowCardExpiry() {
    return this.checkoutPaymentSection.$(".row.input-row:nth-child(4)");
  }
  get checkoutShopColumnCardExpMonth() {
    return this.checkoutInputRowCardExpiry.$(".column");
  }
  get checkoutShopSelectCardExpMonth() {
    return this.checkoutShopColumnCardExpMonth.$("shop-select");
  }
  get checkoutCardExpMonth() {
    return this.checkoutShopSelectCardExpMonth.$("#ccExpMonth");
  }

  //Year
  get checkoutShopSelectCardExpYear() {
    return this.checkoutInputRowCardExpiry.$("shop-select:nth-child(2)");
  }
  get checkoutCardExpYear() {
    return this.checkoutShopSelectCardExpYear.$("select#ccExpYear");
  }

  //CVV
  get checkoutShopInputCvv() {
    return this.checkoutInputRowCardExpiry.$("shop-input");
  }
  get checkoutCardInputCvv() {
    return this.checkoutShopInputCvv.$("#ccCVV");
  }

  //Place Order
  get checkouShopButtonSubmitBox() {
    return this.checkoutPaymentSection.$("#submitBox");
  }
  get checkouShopBtnPlaceOrder() {
    return this.checkouShopButtonSubmitBox.$("input");
  }

  // CheckOut Success
  get checkOutMainFrame() {
    return this.ironselected.shadow$("div.main-frame");
  }
  get checkOutIronPages() {
    return this.checkOutMainFrame.$("iron-pages#pages");
  }
  get checkOutHeaderIronSelected() {
    return this.checkOutIronPages.$("header.iron-selected");
  }
  get checkOutMessageThankYou() {
    return this.checkOutHeaderIronSelected.$("h1");
  }
  get checkOutMessageComplete() {
    return this.checkOutHeaderIronSelected.$("p");
  }

  // ------------- Page Methods -------------
  async clickCheckOut() {
    await this.click(this.btncheckOut);
  }

  async verifyCheckOutForm() {
    await this.verifyElementIsDisplayed(this.checkoutForm);
  }

  async setCheckOutForm() {
    await this.setText(this.checkoutAccountEmail, config.email());

    await this.setText(this.checkoutAccountPhone, config.phone());

    await this.setText(this.checkoutShipAddress, config.address());

    await this.setText(this.checkoutShipCity, checkoutdata.city);

    await this.setText(this.checkoutShipState, checkoutdata.state);

    await this.setText(this.checkoutShipZip, checkoutdata.zip);

    await this.selectDropdown(this.checkoutShipCountry, checkoutdata.country);

    await this.setText(this.checkoutCardName, config.ccardName());

    await this.setText(this.checkoutCardNumber, config.ccardNum());

    await this.selectDropdown(
      this.checkoutCardExpMonth,
      checkoutdata.cardMonth
    );

    await this.setText(this.checkoutCardInputCvv, checkoutdata.cvv);

    await this.click(this.checkouShopBtnPlaceOrder);
  }

  async verifyCheckOutSuccess(text: string) {
    await this.verifyElementIsDisplayed(this.checkOutMessageThankYou);
    await this.verifyElementIsDisplayed(this.checkOutMessageComplete);
    await this.assertText(this.checkOutMessageThankYou, text);
  }
}

export default new checkoutPage();
