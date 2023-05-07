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
  cartClicked: boolean = false

  tabState = {
    active: true,
    tabName: 'women'
  }

  ngOnInit(): void {

    this.productSrv.cartItems$.asObservable().subscribe(res => {this.cartCount = res; console.log(res)})
    console.log(this.cartCount)

    this.tabState.tabName = 'women'
  }

  tellCartIsClicked() {
    
    if(this.cartClicked == false) {
      this.productSrv.cartClicked$.next(true)
      this.cartClicked = true
    } else {
      this.productSrv.cartClicked$.next(false)
      this.cartClicked = false
    }
  }

  switchTab(tabName: string) {
    switch (tabName) {
      case 'women':
        this.tabState.tabName = 'women'
        this.tabState.active = true
        break;
      case 'men':
        this.tabState.tabName = 'men'
        this.tabState.active = true
        break;
      case 'kids':
        this.tabState.tabName = 'kids'
        this.tabState.active = true
        break;
      default:
        break;
    }
  }

}
