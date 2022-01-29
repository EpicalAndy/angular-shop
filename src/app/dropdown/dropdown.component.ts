import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template:`

   <app-button color="primary"
   (click)="onClick()"
   (mouseenter)="onmouseenter()"
   (mouseleave)="onMouseLeave()"
   size="default"
    [isActive]="false"
     [isDisabled]="false">
     </app-button>
     <app-menu [style.display]="isOpen ? '' : 'none'"></app-menu>
     `
})

export class DropdownComponent implements OnInit {
  @Input() trigger: string = 'hover';

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
    this.onMouseLeave();
  }

  public onmouseenter() {
    this.trigger === 'hover' && this.toggleMenu(true);
  }

  public onMouseLeave() {
    this.trigger === 'hover' && this.toggleMenu(false);
  }

  public onClick() {
    this.trigger === 'click' && this.toggleMenu();
  }

  private toggleMenu(state?: boolean) {
    this.isOpen = state ? this.isOpen = state : !this.isOpen;
  }
}
