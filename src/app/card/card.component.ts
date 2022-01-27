import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `<app-button
  color="default"
   size="default"
   [isActive]="true"
   [isDisabled]="true">
   </app-button>
   <app-badge></app-badge>`
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
