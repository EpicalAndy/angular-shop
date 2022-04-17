import { Component } from '@angular/core';

import { products } from "./products.data";

import { DataServiceService } from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homework';

  constructor(private dataService: DataServiceService) {
  }

  ngOnInit(): void {
    this.dataService.setData(products);
  }
}
