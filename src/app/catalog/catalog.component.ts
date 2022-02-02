import { Component, OnInit } from '@angular/core';

import { products } from '../products.data'
import { CartModule } from '../cart/cart.module';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: any[] = [];
  inCart: any[] = [];
  productsInCart: any[] = [];

  constructor() {
    this.products = products;
   }

  ngOnInit(): void {
  }

  public addCatalogToCart(event: any, item: any) {
    this.productsInCart.push(event);
  }

  public addToCart(isAddedToCart: any, item: any) {
    let index = this.getProductCartIndex(item);

    index !== undefined && (this.inCart[index]['count'] += 1);
    index === undefined && this.inCart.push({count: 0, product: item});
    /*
    if (isAddedToCart) {
      this.productsInCart.push(item);

      return;
    }

    index = this.getProductCartIndex(item);

    index !== undefined && this.productsInCart.splice(index, 1);
    */
  }

  private getProductCartIndex(product: any) {
    const products = this.productsInCart;

    let index = this.productsInCart.length;

    while (index) {
      index -= 1;

      if (products[index]['id'] === product['id']) {
        return index;
      }
    }

    return undefined;
  }
}
