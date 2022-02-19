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

  public showButtons = {add: false, remove: true};

  ngOnInit(): void {
  }

  public get productsData() {
    return this.products
  }

  public closeCart() {
    this.close.emit(true);
  }

  public removeFromCart(product: any) {
    /* this.products = this.products.filter(item => {
      return item['product']['id'] !== product['product']['id']

    })*/

    this.products.forEach((item, index) => {
      if (item['product']['id'] === product['product']['id']) {
        this.products.splice(index, 1);
      }
    });
  }

  public clearCart() {
    this.products.splice(0, this.products.length);
  }

  public createOrder() {
    this.clearCart();
  }

  public get curentSumm() {
    const val = 0;

    return this.products.reduce((acc, product) => acc + product['product']['price'], val);
  }
}
