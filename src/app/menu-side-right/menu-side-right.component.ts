import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-side-right',
  templateUrl: './menu-side-right.component.html',
  styleUrls: ['./menu-side-right.component.scss']
})
export class MenuSideRightComponent implements OnInit {

  isOpenMenu: boolean;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.currentValue.subscribe(openMenu => this.isOpenMenu = openMenu);
  }

}
