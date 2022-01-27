import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { constants } from './constants';

@Component({
  selector: 'app-button',
  template: `<button class="button" [ngClass]="{active: isButtonActive}"
  (click)="buttonClick()"
  [style.background]="buttonColor"
   [attr.disabled]="isButtonDisabled">
      <span>button</span>
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

  constructor() {
    this.isButtonDisabled = null;
    this.isButtonActive = false

    this.buttonColor = 'white';
    this.buttonSize = 'default';
  }

  ngOnInit(): void {

  }

  public buttonClick() {
    alert('Work!');
  }
}
