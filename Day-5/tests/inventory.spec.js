const { test, expect } = require('@playwright/test');

test('Verify inventory page elements and products', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveTitle('Swag Labs');

    const logo = page.locator('.app_logo');
    await expect(logo).toBeVisible();

     await expect(page).toHaveURL(/inventory/);

    const inventoryContainer = page.locator('.inventory_container');
    await expect(inventoryContainer).toBeVisible();

    const products = page.locator('.inventory_item');

    const productCount = await products.count();

    console.log(`Number of products loaded: ${productCount}`);

    expect(productCount).toBeGreaterThanOrEqual(6);
});

//Assignment 1- Assertions