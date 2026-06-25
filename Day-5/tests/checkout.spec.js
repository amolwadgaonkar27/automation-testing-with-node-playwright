const { test, expect } = require('@playwright/test');

test('Add product, checkout and validate order success', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.locator('.btn_inventory').first().click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await page.click('.shopping_cart_link');

    await expect(page.locator('.cart_item')).toHaveCount(1);

    await page.click('#checkout');

    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');

    await page.click('#continue');

    await expect(page.locator('.title')).toHaveText('Checkout: Overview');

    await page.click('#finish');

    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');

    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');

    await expect(page.locator('.complete-text'))
        .toContainText('Your order has been dispatched');

    console.log('Order placed successfully');
});

//Assignment 3- Checkout