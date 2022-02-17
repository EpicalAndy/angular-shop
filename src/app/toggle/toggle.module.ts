import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../button/button.module';

import { ToggleComponent } from './toggle.component';



@NgModule({
  declarations: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ToggleComponent
  ]
})

export class ToggleModule { }
