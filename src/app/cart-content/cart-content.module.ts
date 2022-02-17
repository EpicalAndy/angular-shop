import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartContentComponent } from './cart-content.component';

import { CardModule } from '../card/card.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    CartContentComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    CartContentComponent
  ]
})
export class CartContentModule { }
