import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CartService } from "../cart/cart.service";
import { Product } from "../product-page/product.model";

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {
  private products: Product[] = this.cartService.getCart();

  @Output() close = new EventEmitter();

  public showButtons = {add: false, remove: true};

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {

  }

  public get productsData() {
    return this.products;
  }

  public closeCart() {
    this.close.emit(true);
  }

  public removeFromCart(product: any) {
    this.cartService.removeProduct(product);
  }

  public clearCart() {
    this.cartService.clearCart();
  }

  public createOrder() {
    this.clearCart();

    this.closeCart();
  }

  public get currentSum() {
    const val = 0;

    return this.products.reduce((acc, product) => acc + product['price'], val);
  }
}
