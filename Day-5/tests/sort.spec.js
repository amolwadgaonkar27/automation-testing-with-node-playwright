const { test, expect } = require('@playwright/test');

test('Sort products and verify cart items', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await page.selectOption('.product_sort_container', 'lohi');

    const priceElements = await page.locator('.inventory_item_price').allTextContents();

    const prices = priceElements.map(price =>
        parseFloat(price.replace('$', ''))
    );

    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);

    console.log('Products sorted correctly by Price Low -> High');

    await page.selectOption('.product_sort_container', 'az');

    const productNames = await page.locator('.inventory_item_name').allTextContents();

    const sortedNames = [...productNames].sort();

    expect(productNames).toEqual(sortedNames);

    console.log('Products sorted correctly by Name A -> Z');

    await page.locator('.btn_inventory').nth(0).click();
    await page.locator('.btn_inventory').nth(1).click();

    const cartBadge = page.locator('.shopping_cart_badge');

    await expect(cartBadge).toHaveText('2');

    await page.click('.shopping_cart_link');

    const cartItems = page.locator('.cart_item');

    await expect(cartItems).toHaveCount(2);

    console.log('2 products successfully added to cart');
});

//Assignment 2- Cart