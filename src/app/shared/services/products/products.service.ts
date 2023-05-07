import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { products } from 'src/app/DB/products';
import { ICart } from 'src/app/models/cart.model';
import { IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartItems$: BehaviorSubject<number> = new BehaviorSubject(0)
  itemInCart$: Subject<ICart[]> = new Subject()
  cart: ICart[] = []

  constructor() { }

  getAllProducts() {
    return products
  }

  getProduct(id: number) {
    let product = products.find(p => p.id == id)
    return product
  }

  getCartItems() {
    return this.cart
  }

  addToCart(product: ICart) {

    this.cart = [product, ...this.cart]
    console.log(this.cart)
    this.itemInCart$.next(this.cart)
    this.cartItems$.next(this.cart.length)
    return this.cart
    
  }
}
