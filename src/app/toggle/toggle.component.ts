import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { toggle } from './model';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: [ './toggle.component.scss' ]
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

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getToggleFromUrl();
  }

  public buttonPressed(event: any, elm: any) {
    elm.isActive ? null : this.toogleStatus.emit(event);
  }

  private getToggleFromUrl() {
    const params = this.route.snapshot.queryParams;
    const toggles = this._toogless;
    const newToggleList: any = [];

    let pressedButton: any;

    if (params && Object.keys(params).length) {
      toggles?.forEach(toggle => {
        // const newToggle = Object.assign({}, toggle);
        const newToggle = toggle;

        newToggle['isActive'] = false;

        if (params[newToggle['value']] === 'true' && !pressedButton) {
          newToggle['isActive'] = true;
          pressedButton = newToggle;
        }

        newToggleList.push(newToggle);
      });
    }

    this.toogless = newToggleList.length ? newToggleList : this.toogless;

    Object.keys(params).length && this.router.navigate([ '/catalog' ], { queryParams: params });
    pressedButton && this.buttonPressed(pressedButton.value, pressedButton);
  }
}
