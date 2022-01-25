import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<app-button></app-button><app-badge></app-badge>'
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
