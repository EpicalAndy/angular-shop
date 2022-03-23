import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { IconTooltipModule } from './icon-tooltip/icon-tooltip.module';
import { CardModule } from './card/card.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { CatalogModule } from './catalog/catalog.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CardModule,
    IconTooltipModule,
    CatalogModule,
    RouterModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'ru'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
