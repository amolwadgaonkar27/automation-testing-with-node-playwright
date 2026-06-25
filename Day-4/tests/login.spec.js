const { test, expect } = require('@playwright/test');

test.describe('SauceDemo Login Tests', () => {

    test('Valid Login - Verify Inventory Page', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');

        await page.click('#login-button');

        await expect(page).toHaveURL(/inventory/);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('Invalid Login - Validate Error Message', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.fill('#user-name', 'invalid_user');
        await page.fill('#password', 'wrong_password');

        await page.click('#login-button');

        const errorMessage = page.locator('[data-test="error"]');

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText(
            'Username and password do not match'
        );

        console.log(
            'Error Message:',
            await errorMessage.textContent()
        );
    });

});

//Assignment 4- Actions