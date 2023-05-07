import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/cart.model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-cart-overlay',
  templateUrl: './cart-overlay.component.html',
  styleUrls: ['./cart-overlay.component.scss']
})
export class CartOverlayComponent implements OnInit {

  constructor(private productSrv: ProductsService) { }

  cartItems!: ICart[]

  total: number = 0
  cartCount!: number

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems() {
    this.cartItems = this.productSrv.getCartItems()
    this.cartItems = this.cartItems.filter(i => i.quantity !== 0)
    this.cartCount = this.cartItems.length

    this.cartItems.forEach(item => {
      
      let totalForEach = item.quantity * item.price
      this.total = this.total + totalForEach

    })
  }

  selectSize(size: string, product: ICart) {
    product.selectedSize = size
  }

  selectColor(color: string, product: ICart) {
    product.selectedColor = color
  }

  increament(product: ICart) {
    product.quantity++

    this.total = 0

    this.cartItems.map((i: ICart) => {
      if(i.id == product.id) {
        i.quantity = product.quantity
      }
    })

    this.getCartItems()

  }

  decreament(product: ICart) {
    product.quantity--

    this.total = 0

    if(product.quantity == 0) {
      this.cartItems = this.cartItems.filter(i => i.id !== product.id)
    }

    this.cartItems.map((i: ICart) => {
      if(i.id == product.id) {
        i.quantity = product.quantity
      }
    })

    this.cartItems.forEach(item => {
      
      let totalForEach = item.quantity * item.price
      this.total = this.total - totalForEach * (-1)

    })

  }

}
