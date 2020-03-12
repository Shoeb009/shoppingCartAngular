import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { productlistService } from '../../productlistService';
import { CartService } from '../../CartService';

@Component({
  selector: 'app-product-cart-details',
  templateUrl: './product-cart-details.component.html',
  styleUrls: ['./product-cart-details.component.css']
})
export class ProductCartDetailsComponent implements OnInit {
productsCart;
  public productList=[];


  constructor(private _productlistService:productlistService, private _cartService:CartService) { }
 

  ngOnInit(): void {
    this._productlistService.getProducts().subscribe(data=>this.productList=data);
    this.productsCart=this._cartService.getItems();
    } 

    clearCart(){
      this._cartService.clearCart();
      window.alert("Cart will be cleared");
    }
    
    
    

  

}
