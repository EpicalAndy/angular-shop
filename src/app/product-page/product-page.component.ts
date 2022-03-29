import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

import { products } from "../products.data";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public productId = ''
  public productData: any

  constructor(private route: ActivatedRoute, private router: Router) {
    this.productId = this.route.snapshot.params['id'];
    this.productData = products.find((product) => {return `${product['id']}` === this.productId});
  }

  ngOnInit(): void {
    this.isNoHaveProduct() && this.goTo404Page();
  }

  private isNoHaveProduct() {
    return !this.productData;
  }

  private goTo404Page() {
    this.router.navigate(['/404']);
  }
}
