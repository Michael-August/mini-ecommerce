import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Input() products!: IProduct[]

  @Output() emitAction = new EventEmitter()

  ngOnInit(): void {
  }

  handleActionToEmit(product: IProduct, actionName: string) {
    let dataToEmit = { product, actionName }
    this.emitAction.emit(dataToEmit)
  }

}
