import { CardModule } from '../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModule } from '../cart/cart.module';
import { CatalogComponent } from './catalog.component';
import { ToggleModule } from '../toggle/toggle.module';
import { CartContentModule } from '../cart-content/cart-content.module';
import { CatalogRoutingModule } from './catalog-routing.module'
import { CatalogService } from "./catalog.service";


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CartModule,
    CartContentModule,
    CatalogRoutingModule,
    ToggleModule
  ],
  exports: [ CatalogComponent ],
  providers: [ CatalogService ]
})

export class CatalogModule {
}
