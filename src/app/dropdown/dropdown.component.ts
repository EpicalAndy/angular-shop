import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  template:`
  <label for="homework">Dropdown </label>
   <select name="homework" id="homework">
     <option value="1">One</option>'
     <option value="2">Two</option>'
   </select>
   <br>
   <app-button color="primary"
   size="default"
    [isActive]="false"
     [isDisabled]="false">
     </app-button>`
})
export class DropdownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
