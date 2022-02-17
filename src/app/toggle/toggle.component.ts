import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { toggle } from './model';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  private _toogless: toggle[] | undefined;

  @Input() set toogless(val: toggle[] | undefined) {
    this._toogless = val;
  };

  @Output() toogleStatus = new EventEmitter()

  public get toogless() {
    return this._toogless;
  }

  constructor() {
    this.toogless = [];
  }

  public buttonPresed(event: any, elm: any) {
    elm.isActive ? null : this.toogleStatus.emit(event);
  }

  ngOnInit(): void {
  }
}
