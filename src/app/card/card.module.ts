import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

import { ButtonModule } from '../button/button.module';
import { BadgeModule } from '../badge/badge.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
