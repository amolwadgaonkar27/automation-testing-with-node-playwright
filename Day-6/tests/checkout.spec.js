const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

const loginData = require('../testData/loginData.json');
const checkoutData = require('../testData/checkoutData.json');

test('Add product, checkout and validate order success', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await inventoryPage.addFirstProductToCart();

    await expect(cartPage.cartBadge)
        .toHaveText('1');

    await cartPage.openCart();

    await expect(cartPage.cartItems)
        .toHaveCount(1);

    await cartPage.proceedToCheckout();

    await checkoutPage.enterCheckoutDetails(
        checkoutData.firstName,
        checkoutData.lastName,
        checkoutData.postalCode
    );

    await checkoutPage.continueCheckout();

    await expect(checkoutPage.pageTitle)
        .toHaveText('Checkout: Overview');

    await checkoutPage.finishOrder();

    await expect(checkoutPage.pageTitle)
        .toHaveText('Checkout: Complete!');

    await expect(checkoutPage.completeHeader)
        .toHaveText('Thank you for your order!');

    await expect(checkoutPage.completeText)
        .toContainText('Your order has been dispatched');

    console.log('Order placed successfully');
});

//Assignment 2- POM Implementation