// @ts-check
import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/home-page";

// test("purchasing product", async ({ page }) => {
//   await page.goto("/");
//   await page.getByTestId("products-grid").getByText('Miecz Runiczny').click();
//   await expect(page).toHaveURL("/products/p1.html");
//   await expect(
//     page.getByRole("heading", { name: "Miecz Runiczny" })
//   ).toBeVisible();
//   await expect(page.getByRole("button", { name: "Dodaj do koszyka" })).toBeVisible();
//   await page.getByRole('button', {name:'Dodaj do koszyka'}).click();
//   await expect (page.locator ('.toast-success')).toContainText('Dodano do koszyka: Miecz Runiczny');
//   await page.getByTestId('cart-button').click();
//   await expect(page.getByTestId('cart-list')).toContainText('Miecz Runiczny (p1)');
// });


test("purchasing product", async ({ page }) => {
  const mainPage = new MainPage(page);
  const productName = "Miecz Runiczny";
  const productId = "p1";

  await mainPage.goto();
  await mainPage.verifyTitle();

  await mainPage.clickProductById(productName);

  
  
  });