import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <menu>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </menu>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
