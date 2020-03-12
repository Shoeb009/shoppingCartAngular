import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartDetailsComponent } from './product-list/product-cart-details/product-cart-details.component';


const routes: Routes = [
{path:"ProductList", component:ProductListComponent},
{path:"ProductCartDetails", component:ProductCartDetailsComponent},
{path:"", redirectTo:"ProductList",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
