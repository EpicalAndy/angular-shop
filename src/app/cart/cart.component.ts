import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get count() {
    return this.cart.length;
  }

  public get totalCount() {
    let count = 0;

    return this.cart.forEach(product => count += product.count);
  }

}
