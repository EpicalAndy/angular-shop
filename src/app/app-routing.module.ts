import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { CatalogComponent } from './catalog/catalog.component';
import { NoteFoundComponent } from "./note-found/note-found.component";

export const routes: Routes = [
  {
    path: '',
    component: CatalogComponent
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
    CommonModule, RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }
