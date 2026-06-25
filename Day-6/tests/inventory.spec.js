const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

const loginData = require('../testData/loginData.json');

test('Verify inventory page elements and products', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await expect(page).toHaveTitle('Swag Labs');

    await expect(page).toHaveURL(/inventory/);

    await expect(inventoryPage.logo).toBeVisible();

    await expect(inventoryPage.inventoryContainer)
        .toBeVisible();

    const productCount =
        await inventoryPage.getProductCount();

    console.log(
        `Number of products loaded: ${productCount}`
    );

    expect(productCount).toBeGreaterThanOrEqual(6);
});

//Assignment 2- POM Implementation