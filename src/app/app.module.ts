import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartDetailsComponent } from './product-list/product-cart-details/product-cart-details.component';
import { productlistService } from '../app/productlistService';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from '../app/CartService';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [productlistService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
