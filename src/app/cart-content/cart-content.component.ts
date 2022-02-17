import { products } from './../products.data';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  constructor() { }

  @Input() products: any[] = [];

  ngOnInit(): void {
  }

}
