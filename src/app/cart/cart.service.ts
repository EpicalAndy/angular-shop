import { Injectable } from '@angular/core';

import { Product } from "../product-page/product.model";



@Injectable({
  providedIn: 'root'
})

export class CartService {
  private inCart: Product[] = [];

  constructor() {
  }

  public addProduct(product: Product) {
    this.inCart.push(product);
  }

  public removeProduct(product: Product) {
    const productIndex = this.inCart.findIndex(item => product.id !== item.id);

    this.inCart.splice(productIndex, 1);
  }

  public getCart() {
    return this.inCart;
  }

  public getCount() {
    return this.inCart.length;
  }

  public clearCart() {
    this.inCart = [];
  }
}
