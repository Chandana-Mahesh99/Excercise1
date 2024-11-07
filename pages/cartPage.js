class CartPage {
  constructor(page) {
    this.page = page;
    this.cartProductName = '.inventory_item_name'; 
  }
  async getCartProductName() {
    return await this.page.textContent(this.cartProductName);
  }
}

module.exports = CartPage;
