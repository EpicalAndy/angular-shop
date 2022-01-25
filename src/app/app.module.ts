import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';
import { CardModule } from './card/card.module';
import { DropdownModule } from './dropdown/dropdown.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    CardModule,
    IconTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
