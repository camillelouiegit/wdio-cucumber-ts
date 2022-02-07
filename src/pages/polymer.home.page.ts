import TestBase from "../utils/testbase";

class HomePage extends TestBase {
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
  get appToolbar() {
    return this.appheader.$("app-toolbar");
  }
  get appToolbarLogo() {
    return this.appToolbar.$("div.logo");
  }
  get shopLink() {
    return this.appToolbarLogo.$("a");
  }

  // Header links
  get menslink() {
    return this.shoptabMens.$("a");
  }
  get ladylink() {
    return this.shoptabLadies.$("a");
  }
  get menShirtlink() {
    return this.shoptabMenShirt.$("a");
  }
  get ladiesShirtlink() {
    return this.shoptabLadiesShirt.$("a");
  }

  // Common header title
  get ironpages() {
    return this.shopapp.shadow$("iron-pages");
  }
  get ironselected() {
    return this.ironpages.$(".iron-selected");
  }
  get headerTitle() {
    return this.ironselected.shadow$("header h1");
  }

  // Cart
  get apptoolbar() {
    return this.appheader.$("app-toolbar");
  }
  get logo() {
    return this.apptoolbar.$(".logo");
  }
  get shop() {
    return this.logo.$("a");
  }
  get cartcontainer() {
    return this.apptoolbar.$("div.cart-btn-container");
  }
  get cartLink() {
    return this.cartcontainer.$("a");
  }

  // ------------- Page Methods -------------
  async openUrl(path: string) {
    open(path);
  }

  async chooseSection(option: string) {
    if (option == "Men's Outerwear") {
      await this.click(this.menslink);
    } else if (option == "Ladies Outerwear") {
      await this.click(this.ladylink);
    } else if (option == "Men's Shirt") {
      await this.click(this.menShirtlink);
    } else if (option == "Ladies T-Shirt") {
      await this.click(this.ladiesShirtlink);
    }
  }

  async verifyHeaderTitle() {
    await this.verifyElementIsDisplayed(this.headerTitle);
  }

  async clickCart() {
    await this.click(this.cartLink);
  }

  async clickShop() {
    await this.click(this.shopLink);
  }
}
export default new HomePage();
