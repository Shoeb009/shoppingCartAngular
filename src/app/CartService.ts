import { Injectable } from "@angular/core";

@Injectable()

export class CartService{
    productsCart=[];

    addToCart(product) {
        this.productsCart.push(product);
      }
    
    getItems() {
        return this.productsCart;
      }

    clearCart() {
        this.productsCart = [];
        return this.productsCart;
        
      }
}