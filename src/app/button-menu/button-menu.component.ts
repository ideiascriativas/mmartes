import { Component, OnInit, ContentChild } from '@angular/core';
import { IconMenuDirective } from '../icon-menu.directive';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  @ContentChild(IconMenuDirective) iconMenu: IconMenuDirective;

  constructor() { }

  ngOnInit() {
  }

  public openMenu() {

  }
}
