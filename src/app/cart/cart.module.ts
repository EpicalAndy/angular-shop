import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    CartComponent
  ]
})

export class CartModule { }
