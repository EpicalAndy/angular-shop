import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { toggle } from '../toggle/model';
import { CatalogService } from "./catalog.service";
import { CartService } from "../cart/cart.service";


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: [ './catalog.component.scss' ]
})
export class CatalogComponent implements OnInit {
  inCart: any[] = [];
  buttonPressed: string | undefined;
  toggles: toggle[] | undefined;

  constructor(private router: Router,
              private catalogService: CatalogService,
              private cartService: CartService) {
    this.toggles = [
      { label: 'Показать все', value: 'all', isActive: true },
      { label: 'Со скидкой', value: 'discount', isActive: false },
      { label: 'В наличии', value: 'inStock', isActive: false },
      { label: 'Пустышка', value: '', isActive: false }
    ];
    this.inCart = this.cartService.getCart();
  }

  ngOnInit(): void {
  }

  public get products(): any[] {
    return this.catalogService.getProducts(this.getActiveFilterName());
  }

  public isShowCartContent: boolean = false;

  public showCartContent() {
    this.isShowCartContent = this.cartService.getCount() > 0 && !this.isShowCartContent;
  }

  public addToCart(item: any) {
    this.cartService.addProduct(item);
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
