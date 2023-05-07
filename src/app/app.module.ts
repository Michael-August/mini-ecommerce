import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Angular4PaystackModule } from 'angular4-paystack'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartOverlayComponent } from './components/cart-overlay/cart-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    ProductListComponent,
    CartOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular4PaystackModule.forRoot('pk_test_5ad5cc47db505959ce480c84131c0963c223e462')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
