import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICart } from 'src/app/models/cart.model';
import { IProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private productSrv: ProductsService) { }

  productId: any
  product!: any

  cartIsClicked: boolean = false

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.paramMap.get('id')

    this.getProduct(this.productId)

    this.productSrv.cartClicked$.asObservable().subscribe(res => this.cartIsClicked = res)
  }

  getProduct(productId: number) {
    this.product = this.productSrv.getProduct(productId)
    console.log(this.product)
  }

  selectSize(size: string) {
    this.product.selectedSize = size
  }

  selectColor(color: string) {
    this.product.selectedColor = color
  }

  addToCart(product: ICart) {
    let cartItem: ICart = { ...product, quantity: 1 }
    this.productSrv.addToCart(cartItem)
    this.productSrv.cartItems$.asObservable().subscribe(res => console.log(res))
  }

}
