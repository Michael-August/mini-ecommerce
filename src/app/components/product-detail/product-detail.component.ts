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

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.paramMap.get('id')

    this.getProduct(this.productId)
  }

  getProduct(productId: number) {
    this.product = this.productSrv.getProduct(productId)
    console.log(this.product)
  }

  addToCart(product: ICart) {
    let cartItem: ICart = { ...product, quantity: 1, selectedColor: 'black', selectedSize: 'S' }
    this.productSrv.addToCart(cartItem)
    this.productSrv.cartItems$.asObservable().subscribe(res => console.log(res))
  }

}
