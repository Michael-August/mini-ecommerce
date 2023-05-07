import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/cart.model';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productSrv: ProductsService, private router: Router) { }

  products!: IProduct[]

  ngOnInit(): void {
    this.getProducts()
    console.log(this.products)
  }

  getProducts() {
    this.products = this.productSrv.getAllProducts()
  }

  takeAction(event: any) {
    switch (event.actionName) {
      case 'addToCart':
        this.addToCart(event.product)
        break
      case 'view':
        this.router.navigateByUrl(`/products/${event.product.id}`)
        break;
      default:
        break;
    }
    
  }

  addToCart(product: ICart) {
    let cartItem: ICart = { ...product, quantity: 1, selectedColor: 'black', selectedSize: 'S' }
    this.productSrv.addToCart(cartItem)
    this.productSrv.cartItems$.asObservable().subscribe(res => console.log(res))
  }

}
