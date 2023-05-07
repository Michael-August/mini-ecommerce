import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/cart.model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private productSrv: ProductsService) { }

  cartItems!: ICart[]

  tax!: number
  quantity: number = 0
  total: number = 0

  cartIsClicked: boolean = false

  ref = `${Math.ceil(Math.random() * 10e10)}`

  ngOnInit(): void {
    this.getCartItems()

    this.productSrv.cartClicked$.asObservable().subscribe(res => this.cartIsClicked = res)
  }

  getCartItems() {
    this.cartItems = this.productSrv.getCartItems()
    this.cartItems = this.cartItems.filter(i => i.quantity !== 0)

    this.cartItems.forEach(item => {
      this.quantity = this.quantity + item.quantity
      
      let totalForEach = item.quantity * item.price
      this.total = this.total + totalForEach

      this.tax = 0.21 * this.total
    })
  }

  paymentInit() {
    console.log('Payment Initialized')
  }

  paymentDone(ref: any) {
    console.log('Payment Successful', ref)
    this.cartItems = []
    alert('Payment successful')
  }

  paymentCanceled() {
    console.log('Payment Failed')
  }

  selectSize(size: string, product: ICart) {
    product.selectedSize = size
  }

  selectColor(color: string, product: ICart) {
    product.selectedColor = color
  }

  increament(product: ICart) {
    product.quantity++

    this.tax = 0
    this.total = 0
    this.quantity = 0

    this.cartItems.map((i: ICart) => {
      if(i.id == product.id) {
        i.quantity = product.quantity
      }
    })

    this.getCartItems()

  }

  decreament(product: ICart) {
    product.quantity--

    this.tax = 0
    this.total = 0
    this.quantity = 0

    if(product.quantity == 0) {
      this.cartItems = this.cartItems.filter(i => i.id !== product.id)
    }

    this.cartItems.map((i: ICart) => {
      if(i.id == product.id) {
        i.quantity = product.quantity
      }
    })

    this.cartItems.forEach(item => {
      this.quantity = this.quantity + item.quantity
      
      let totalForEach = item.quantity * item.price
      this.total = this.total - totalForEach * (-1)

      this.tax = 0.21 * this.total
    })

  }

}
