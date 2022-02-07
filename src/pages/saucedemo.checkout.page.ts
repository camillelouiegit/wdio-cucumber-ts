import TestBase from "../utils/testbase";

class ProductsPage extends TestBase {
  // ------------- Page Elements -------------
  private get inventoryItems() {
    return $$(".inventory_item");
  }

  private get cart() {
    return $(".shopping_cart_link");
  }

  private get inventoryItemName() {
    return $$(".inventory_item_name");
  }

  private get checkoutBtn() {
    return $("#checkout");
  }

  private get firstname() {
    return $("#first-name");
  }

  private get lastname() {
    return $("#last-name");
  }

  private get postal() {
    return $("#postal-code");
  }

  private get continueBtn() {
    return $("#continue");
  }

  private get cartList() {
    return $(".cart_list");
  }

  private get finishBtn() {
    return $("#finish");
  }

  private get thankYouMessage() {
    return $(".complete-header");
  }

  // ------------- Page Methods -------------
  addItemsToCart = async () => {
    const length = this.inventoryItems.length;
    for (var i = 0; i < (await length); i++) {
      const button = $$(".inventory_item")[i].$("button");
      await this.click(button);
    }
  };

  viewCart = async () => {
    await this.click(this.cart);
  };

  verifyAddedToCart = async () => {
    const length = this.inventoryItemName.length;
    for (var i = 0; i < (await length); i++) {
      const itemNames = this.inventoryItemName[i].getText();
      this.verifyElementIsDisplayed(itemNames);
      console.log(await itemNames);
    }
    console.log("There are " + (await length) + " items in the Cart");
  };

  checkOutCart = async () => {
    await this.click(this.checkoutBtn);
  };
  verifyCheckOutForm = async () => {
    await this.verifyElementIsDisplayed(this.firstname);
    await this.verifyElementIsDisplayed(this.lastname);
    await this.verifyElementIsDisplayed(this.postal);
  };
  inputForm = async () => {
    await this.setText(this.firstname, "static gwapo");
    await this.setText(this.lastname, "static gwapo kaayo");
    await this.setText(this.postal, "static gwapo much");
  };

  continueCheckOut = async () => {
    await this.click(this.continueBtn);
  };

  verifyCartListCheckOut = async () => {
    await this.verifyElementIsDisplayed(this.cartList);
  };

  finishCheckOut = async () => {
    await this.click(this.finishBtn);
  };

  verifySuccessMessage = async () => {
    await this.verifyElementIsDisplayed(this.thankYouMessage);
  };
}
export default new ProductsPage();
