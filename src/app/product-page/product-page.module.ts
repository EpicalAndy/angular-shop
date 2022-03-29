import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';

import { CardModule } from "../card/card.module";
import { ProductPageRoutingModule } from "./product-page-routing.module";


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    CardModule
  ]
})
export class ProductPageModule { }
