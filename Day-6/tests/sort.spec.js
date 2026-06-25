const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

const loginData = require('../testData/loginData.json');

test('Sort products and verify cart items', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await inventoryPage.sortProducts('lohi');

    const prices = await inventoryPage.getPrices();

    const sortedPrices = [...prices]
        .sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);

    console.log(
        'Products sorted correctly by Price Low -> High'
    );

    await inventoryPage.sortProducts('az');

    const productNames =
        await inventoryPage.getProductNames();

    const sortedNames =
        [...productNames].sort();

    expect(productNames).toEqual(sortedNames);

    console.log(
        'Products sorted correctly by Name A -> Z'
    );

    await inventoryPage.addProduct(0);
    await inventoryPage.addProduct(1);

    await expect(cartPage.cartBadge)
        .toHaveText('2');

    await cartPage.openCart();

    await expect(cartPage.cartItems)
        .toHaveCount(2);

    console.log(
        '2 products successfully added to cart'
    );
});

//Assignment 2- POM Implementation