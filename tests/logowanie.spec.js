// @ts-check
import { test, expect } from "@playwright/test";

test("logowanie", async ({ page }) => {

    await page.goto ('/');

    await page.getByTestId('login-username').fill('admin'); 
    await page.getByTestId('login-password').fill('admin'); 
    await page.locator('#login-button').click(); 
    await expect(page.getByText ('Zalogowano jako admin')).toBeVisible();
});