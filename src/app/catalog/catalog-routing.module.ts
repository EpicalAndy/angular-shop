import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ProductPageComponent } from '../product-page/product-page.component'
import { NoteFoundComponent } from "../note-found/note-found.component";
import { CatalogComponent } from "./catalog.component";

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: ':id',
    component: ProductPageComponent
  },
  {
    path: '404',
    component: NoteFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class CatalogRoutingModule { }
