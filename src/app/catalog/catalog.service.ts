import { Injectable } from '@angular/core';

import { DataServiceService } from "../data-service.service";

@Injectable()
export class CatalogService {

  constructor(private dataService: DataServiceService) {
  }

  public getProducts(filterBy?: any) {
    return this.filterProducts(filterBy);
  }

  public getProduct(id: number) {
    const products = this.getProducts();

    return products.find((product: any) => {
      return product.id === id;
    });
  }

  private filterProducts(filterBy?: any): any[] {
    const allProducts = this.dataService.getData();
    const filteredProducts: any[] = [];

    allProducts.forEach((product: any) => {
      switch (filterBy) {
        case 'discount':
          product.discount && filteredProducts.push(product);
          break;
        case 'inStock':
          product.count && product.count > 0 && filteredProducts.push(product);
          break;
        default:
          filteredProducts.push(product);
      }
    });

    return filteredProducts;
  }

}
