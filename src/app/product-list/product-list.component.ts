import { Component, OnInit, Inject } from '@angular/core';
import { productlistService } from '../../app/productlistService';
import { CartService } from '../CartService';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList =[];
  public productsCart =[];

  constructor( private _productlistService:productlistService, private _CartService:CartService) { }

  ngOnInit(): void {
    this._productlistService.getProducts().subscribe(data=>this.productList=data);
  }
  showDetails(){
    window.alert("you clikced for details");
  }

  addToCart(product){
    this._CartService.addToCart(product);
  }

  
}

