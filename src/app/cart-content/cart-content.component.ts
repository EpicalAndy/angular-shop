import { products } from './../products.data';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  constructor() { }

  @Input() products: any[] = [];

  @Output() close = new EventEmitter();

  public closeCart() {
    this.close.emit(true);
  }

  ngOnInit(): void {
  }

  public get curentSumm() {
    debugger
    const val = 0;

    return this.products.reduce((acc, product) => acc + product['product']['price'], val);
  }
}
