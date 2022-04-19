import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { toggle } from './model';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: [ './toggle.component.scss' ]
})

export class ToggleComponent implements OnInit {
  private _toggles: toggle[] | undefined;

  @Input() set toggles(val: toggle[] | undefined) {
    this._toggles = val;
  };

  @Output() toggleStatus = new EventEmitter()

  public get toggles() {
    return this._toggles;
  }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getToggleFromUrl();
  }

  public buttonPressed(event: any, elm: any) {
    elm.isActive ? null : this.toggleStatus.emit(event);
  }

  private getToggleFromUrl() {
    const params = this.route.snapshot.queryParams;
    const toggles = this._toggles;
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

    this.toggles = newToggleList.length ? newToggleList : this.toggles;

    Object.keys(params).length && this.router.navigate([ '/catalog' ], { queryParams: params });
    pressedButton && this.buttonPressed(pressedButton.value, pressedButton);
  }
}
