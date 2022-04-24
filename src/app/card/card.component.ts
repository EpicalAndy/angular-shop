import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <a [routerLink]="['/product', product.id]">
        <h2>Product Card</h2>
      </a>
      <p>{{ productId }}</p>
      <ul>
        <li>
          <span>Name: </span><span>{{ product.name }}</span>
        </li>
        <li>
          <span>Count: </span><span>{{ product.count }}</span>
        </li>
        <li>
          <span>Price: </span><span>{{ product.price | currency:'RUR' }}</span>
        </li>
        <li>
          <span>Discount: </span><span>{{ product.discount }}</span>
        </li>
      </ul>
      <app-button [label]="'Добавить'"
                  *ngIf="showAddButton"
                  (clicked)="addProduct($event)">
      </app-button>
      <app-button [label]="'X'"
                  [tooltip]="'убрать из корзины'"
                  *ngIf="showRemoveButton"
                  (clicked)="removeProduct(product)">
      </app-button>
    </div>
  `,
  styleUrls: [ './card.component.scss' ]
})

export class CardComponent implements OnInit {
  @Input() product: any
  @Input() showButtons = { add: false, remove: false };

  @Output() addToCart = new EventEmitter();
  @Output() removeFromCart = new EventEmitter();

  public productId: string

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id']
  }

  ngOnInit(): void {

  }

  public get showAddButton() {
    return this.showButtons.add;
  }

  public get showRemoveButton() {
    return this.showButtons.remove;
  }

  public addProduct(product: any) {
    this.addToCart.emit(product);
  }

  public removeProduct(product: any) {
    this.removeFromCart.emit(product)
  }
}
