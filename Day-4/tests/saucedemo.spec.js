const { test, expect } = require('@playwright/test');

test('Print placeholders from SauceDemo login page', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const usernameField = page.getByPlaceholder('Username');
    const passwordField = page.getByPlaceholder('Password');
    const loginButton = page.locator('#login-button');

    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
    await expect(loginButton).toBeVisible();

    const usernamePlaceholder = await usernameField.getAttribute('placeholder');
    const passwordPlaceholder = await passwordField.getAttribute('placeholder');
    const loginButtonText = await loginButton.getAttribute('value');

    console.log('Username Placeholder:', usernamePlaceholder);
    console.log('Password Placeholder:', passwordPlaceholder);
    console.log('Login Button Text:', loginButtonText);
});

//Assignment 3- Locators