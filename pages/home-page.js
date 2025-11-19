import { expect } from "@playwright/test";
export class MainPage{
     constructor(page) {
        this.page = page;
        this.url = '/';
        this.title = 'Testowy Sklep – Strona główna';
        this.product = page.getByTestId('product-title-4');
        this.addButton = page.getByTestId('buy-btn-4');
        this.toastAddToBasket = page.getByText ('Dodano do koszyka: Mysz Gamingowa'); 
        this.cartButton = page.getByTestId('cart-button');
        this.cartList = page.getByTestId('cart-list') .getByText("Mysz Gamingowa")
        this.buyButton = page.getByTestId("cart-buy");
        this.toastSukces = page.getByText("sukces"); 
    }
    async navigateTo () {
        await this.page.goto(this.url);
        await expect (this.page).toHaveTitle(this.title);
    }

    async checkIfProductIsVisible(expectedText){
        await expect (this.product).toHaveText(expectedText);
    } 
    
    async clickProduct(expectedText){
        await this.product.click();
    } 
     async checkIdInUrl(expectedURL){
        await expect (this.page).toHaveURL(expectedURL);
    }

    async addToBasket(){
        await this.addButton.click();
        await expect (this.toastAddToBasket).toBeVisible(); 
    }
        async checkBasket(){
        await this.cartButton.click();
        await expect (this.cartList).toHaveText ('Mysz Gamingowa (p4)');   
    }

        async buyProduct(){
        await this.buyButton.click();
        await expect (this.toastSukces).toBeVisible(); 
    }

    
}

module.exports = {MainPage}