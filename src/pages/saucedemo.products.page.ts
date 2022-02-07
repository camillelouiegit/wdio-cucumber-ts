import TestBase from "../utils/testbase";

class ProductsPage extends TestBase {
  // ------------- Page Elements -------------
  private get inventoryItem() {
    return $$(".inventory_item");
  }
  private get addToCart() {
    return $(".inventory_item button");
  }

  // ------------- Page Methods -------------
  addItemsToCart = async () => {
    const length = await this.inventoryItem.length;
    for (let i = 0; i < length; i++) {
      await this.click(this.addToCart);
    }
  };
}
export default new ProductsPage();
