import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `<div [style.background]="'url(' + img + ')'"></div>`,
  styleUrls: ['icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() img = '/assets/cart.png';


  constructor() { }

  ngOnInit(): void {
  }

}
