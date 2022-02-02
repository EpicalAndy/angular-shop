import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

import { ButtonModule } from '../button/button.module';

@Component({
  selector: 'app-card',
  template: `
  <div class="card">
    <h2>Product Card</h2>
    <ul>
      <li>
      <span>Name: </span><span>{{ product.name }}</span>
      </li>
      <li>
      <span>Count: </span><span>{{ product.count }}</span>
      </li>
      <li>
      <span>Price: </span><span>{{ product.price | currency:'RUB' }}</span>
      </li>
      <li>
      <span>Added: </span><span>{{ product.addedDate | date: 'full' }}</span>
      </li>
    </ul>
    <app-button name="Добавить" (clicked)="onChanged($event)"></app-button>
  </div>
  `,
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  @Input() product: any

  @Output() addToCart = new EventEmitter();

  constructor() { }

  private isAddedToCart = false;

  ngOnInit(): void {

  }


  public onChanged(data:any) {
    this.addToCart.emit(data);
  }
}
