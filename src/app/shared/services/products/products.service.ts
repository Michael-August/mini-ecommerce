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

  cartClicked$: Subject<boolean> = new Subject()

  cart: ICart[] = [
    // {
    //     id: 1,
    //     img: 'assets/images/Product A.png',
    //     name: 'Sweat Top',
    //     sizes: ['XS', 'S', 'M', 'L'],
    //     price: 50.00,
    //     colors: ['gray', 'black', 'green'],
    //     description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    //     thumbnails: [
    //         'assets/images/Product A.png',
    //         'assets/images/Product A.png',
    //         'assets/images/Product A.png',
    //     ],
    //     selectedColor: 'Black',
    //     selectedSize: 'S',
    //     quantity: 2
    // },
    // {
    //     id: 1,
    //     img: 'assets/images/Product A.png',
    //     name: 'Sweat Top',
    //     sizes: ['XS', 'S', 'M', 'L'],
    //     price: 50.00,
    //     colors: ['gray', 'black', 'green'],
    //     description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    //     thumbnails: [
    //         'assets/images/Product A.png',
    //         'assets/images/Product A.png',
    //         'assets/images/Product A.png',
    //     ],
    //     selectedColor: 'Black',
    //     selectedSize: 'S',
    //     quantity: 2
    // },
    // {
    //     id: 1,
    //     img: 'assets/images/Product A.png',
    //     name: 'Sweat Top',
    //     sizes: ['XS', 'S', 'M', 'L'],
    //     price: 50.00,
    //     colors: ['gray', 'black', 'green'],
    //     description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
    //     thumbnails: [
    //         'assets/images/Product A.png',
    //         'assets/images/Product A.png',
    //         'assets/images/Product A.png',
    //     ],
    //     selectedColor: 'Black',
    //     selectedSize: 'S',
    //     quantity: 2
    // },
    
  ]

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
    this.cartItems$.next(this.cart.length)
    return this.cart
    
  }
}
