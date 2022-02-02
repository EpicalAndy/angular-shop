import { Component, Input, OnChanges, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

import { constants } from './constants';

@Component({
  selector: 'app-button',
  template: `<button class="button"
  [class.active]="isButtonActive"
  (click)="buttonAction()"
  [style.background]="buttonColor"
  [style.width]="buttonSize"
   [attr.disabled]="isButtonDisabled">
      <span>{{ name }}</span>
    </button>`,
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonColor: string;
  buttonSize: string;
  isButtonDisabled: string | null;
  isButtonActive: boolean

  @Input() set color(color: string) {
    this.buttonColor = constants?.color[color];
  }
  @Input() set size(size: string) {
    this.buttonSize = constants['size'][size];
  }
  @Input() set isActive(isActive: boolean) {
    this.isButtonActive = isActive || false;
  }
  @Input() set isDisabled(isDisabled: boolean) {
    this.isButtonDisabled = isDisabled ? '' : null;
  }
  @Input() name = 'Button';
  @Input() action = function() {};

  @Output() clicked = new EventEmitter();

  constructor() {
    this.isButtonDisabled = null;
    this.isButtonActive = false

    this.buttonColor = 'white';
    this.buttonSize = 'auto';
  }

  ngOnInit(): void {

  }

  private buttonClicked = false;

  public buttonHover() {
    this.isButtonActive && true;
  }

  public buttonClick() {
    alert('isActive!');
  }

  public buttonAction() {
    this.buttonClicked = !this.buttonClicked;

    this.clicked.emit(this.buttonClicked);
  }
}
