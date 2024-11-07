class ProductPage {
  constructor(page) {
    this.page = page;
    this.productName = '.inventory_item_name';
    this.productPrice = '.inventory_item_price';
    this.addToCartButton = '.btn_inventory';
    this.cartLink = '.shopping_cart_link';
  }
  async getFirstProduct() {
    const productName = await this.page.textContent(this.productName);
    const productPrice = await this.page.textContent(this.productPrice);
    return { name: productName, price: productPrice };
  }

  async addToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = ProductPage;
