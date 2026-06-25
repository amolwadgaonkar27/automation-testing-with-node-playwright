const { test, expect } = require('@playwright/test');

test('Verify Playwright setup', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);

    console.log('Playwright setup is working successfully!');
});

//Assignment 1- Sample Test(Setup) 