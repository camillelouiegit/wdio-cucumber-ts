import TestBase from "../utils/testbase";

class LadiesShirtPage extends TestBase {
  // ------------- Page Elements -------------
  // Shadow DOM - Common
  get shopapp() {
    return browser.$("shop-app");
  }
  get appheader() {
    return this.shopapp.shadow$("app-header");
  }
  get tabcontainer() {
    return this.appheader.$("#tabContainer");
  }
  get shoptabs() {
    return this.tabcontainer.$("shop-tabs");
  }
  get shoptabMens() {
    return this.shoptabs.$("shop-tab");
  }
  get shoptabLadies() {
    return this.shoptabs.$("shop-tab:nth-child(2)");
  }
  get shoptabMenShirt() {
    return this.shoptabs.$("shop-tab:nth-child(3)");
  }
  get shoptabLadiesShirt() {
    return this.shoptabs.$("shop-tab:nth-child(4)");
  }

  // Common header title
  get ironpages() {
    return this.shopapp.shadow$("iron-pages");
  }
  get ironselected() {
    return this.ironpages.$(".iron-selected");
  }
  get grid() {
    return this.ironselected.shadow$("ul.grid");
  }
  get list() {
    var result = "";
    var characters = "012345";
    var charactersLength = characters.length;
    for (var i = 0; i < 1; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return this.grid.$$("li")[+result].$("a");
  }

  // Select Ladies T-shirt
  get selectShirt() {
    return this.list.$("a");
  }
  get shopListItem() {
    return this.selectShirt.$("shop-list-item");
  }
  get shopImage() {
    return this.shopListItem.shadow$("shop-image");
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
  get btncheckOut() {
    return this.checkoutBox.$('a[href="/checkout"]');
  }

  // ------------- Page Methods -------------
  async selectTShirt() {
    await this.verifyElementIsDisplayed(this.shopListItem);
    await this.verifyElementIsClickable(this.list);
    await this.click(this.list);
  }

  async verifyShirtName() {
    await this.verifyElementIsDisplayed(this.shirtName);
  }

  async clickAddToCart() {
    await this.click(this.btnAddToCart);
  }

  async clickViewCart() {
    await this.verifyElementIsDisplayed(this.cartModal);
    await this.verifyElementIsDisplayed(this.btnViewCart);
    await this.click(this.btnViewCart);
  }

  async verifyInCart() {
    await this.verifyElementIsDisplayed(this.shirtNameInCart);
  }

  async clickCheckOut() {
    await this.click(this.btncheckOut);
  }
}
export default new LadiesShirtPage();
