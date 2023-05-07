import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private productSrv: ProductsService) { }

  cartCount!: number 

  ngOnInit(): void {

    this.productSrv.cartItems$.asObservable().subscribe(res => {this.cartCount = res; console.log(res)})
    console.log(this.cartCount)
  }

}
