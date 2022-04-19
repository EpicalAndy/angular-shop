import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { products } from '../products.data'

import { toggle } from '../toggle/model';
import { CatalogService } from "./catalog.service";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [ './catalog.component.scss' ]
})
export class CatalogComponent implements OnInit {
  // products: any[] = [];
  inCart: any[] = [];
  buttonPressed: string | undefined;
  productsInCart: any[] = [];
  toggles: toggle[] | undefined;

  constructor(private router: Router, private catalogService: CatalogService) {
    this.toggles = [
      { label: 'Показать все', value: 'all', isActive: true },
      { label: 'Со скидкой', value: 'discount', isActive: false },
      { label: 'В наличии', value: 'inStock', isActive: false },
      { label: 'Пустышка', value: '', isActive: false }
    ];

  }

  ngOnInit(): void {
  }

  public get products(): any[] {
    return this.catalogService.getProducts(this.getActiveFilterName());
  }

  public isShowCartContent: boolean = false;

  public showCartContent() {
    this.isShowCartContent = this.inCart.length > 0 && !this.isShowCartContent;
  }

  public addToCart(isAddedToCart: any, item: any) {
    let index = this.getProductCartIndex(item);

    index !== undefined && (this.inCart[index]['count'] += 1);
    index === undefined && this.inCart.push({ count: 0, product: item });
  }

  /**
   * @description возвращает value активного фильтра
   * @private
   */
  private getActiveFilterName() {
    return this.toggles?.find(item => {
      return item.isActive;
    })?.value;
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

  private setQueryParams() {
    const toggles = this.toggles;
    const params: any = {};

    let pressedButton: any;

    toggles?.forEach(toggle => {
      toggle.value && (params[toggle.value] = toggle.isActive);

      pressedButton = toggle.isActive ? toggle.value : pressedButton;
    });

    this.router.navigate([ '/catalog' ], { queryParams: params });
  }

  public pressedFilterButton(buttonValue: any) {
    this.buttonPressed = buttonValue;

    this.toggles?.forEach(toogle => {
      toogle.value === buttonValue && (toogle.isActive = true);
      toogle.value !== buttonValue && (toogle.isActive = false);
    });

    this.setQueryParams();
  }
}
