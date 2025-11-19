// @ts-check
import { test, expect } from "@playwright/test";
import { MainPage } from "../pages/home-page";

test("purchasing product", async ({ page }) => {
  const mainPage = new MainPage(page);

 await mainPage.navigateTo();
 await mainPage.checkIfProductIsVisible('Mysz Gamingowa'); 
 await mainPage.clickProduct('Mysz Gamingowa');

  
 await mainPage.checkIdInUrl ('products/p4.html'); 

await mainPage.addToBasket();

await mainPage.checkBasket(); 

await mainPage.buyProduct(); 
});
