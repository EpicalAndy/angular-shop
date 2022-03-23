import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
