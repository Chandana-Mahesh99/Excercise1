const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');
const { writeToFile } = require('../utils/fileUtils');

test('Add to Cart Functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  await page.goto('https://www.saucedemo.com/');
  await page.waitForLoadState('load');
  await page.pause();  
  await loginPage.login('standard_user', 'secret_sauce');
  const product = await productsPage.getFirstProduct();
  writeToFile('productDetails.txt', `${product.name} - ${product.price}`);
  await productsPage.addToCart();
  await productsPage.goToCart();
  const productInCart = await cartPage.getCartProductName();
  expect(productInCart).toBe(product.name);  
  await page.pause();
});
