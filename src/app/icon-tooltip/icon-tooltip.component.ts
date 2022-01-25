import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-tooltip',
  template: '<app-tooltip></app-tooltip><app-icon></app-icon>'
})
export class IconTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
