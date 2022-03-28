import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { CatalogComponent } from './catalog/catalog.component';
import { NoteFoundComponent } from "./note-found/note-found.component";

export const routes: Routes = [
  {
    path: '',
    // component: CatalogComponent
    redirectTo: 'catalog',
    pathMatch: 'full'
    // loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: '404',
    component: NoteFoundComponent
  },
  {// component: CatalogComponent
    path: 'catalog',
    loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)
  },
  {
    path: 'product',
    // component: ProductPageComponent
    loadChildren: () => import('./product-page/product-page.module').then(m => m.ProductPageModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
