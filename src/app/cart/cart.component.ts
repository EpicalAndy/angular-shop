import { Component, Input, OnInit } from '@angular/core';

import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: any[] = this.cartService.getCart();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  get count() {
    return this.cartService.getCount();
  }
}
