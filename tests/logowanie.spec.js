// @ts-check
import { test, expect } from "@playwright/test";
import { beforeEach } from "node:test";

test. beforeEach(async ({ page }) => {
    await page.goto ('/');

});


test("logowanie admin", async ({ page }) => {

    await page.getByTestId('login-username').fill(process.env.LOGIN_ADMIN); 
    await page.getByTestId('login-password').fill(process.env.PASSWORD_ADMIN); 
    await page.locator('#login-button').click(); 
    await expect(page.getByText ('Zalogowano jako admin')).toBeVisible();
});

test("logowanie user", async ({ page }) => {

    await page.getByTestId('login-username').fill(process.env.LOGIN_USER); 
    await page.getByTestId('login-password').fill(process.env.PASSWORD_USER); 
    await page.locator('#login-button').click(); 
    await expect(page.getByText ('Witaj: user')).toBeVisible();
});