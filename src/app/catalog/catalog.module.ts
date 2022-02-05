import { CardModule } from './../card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartModule } from '../cart/cart.module';
import { CatalogComponent } from './catalog.component';
import { ToggleModule } from '../toggle/toggle.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CartModule,
    ToggleModule
  ],
  exports: [ CatalogComponent ]
})

export class CatalogModule { }
