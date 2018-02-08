import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  private openMenu = new BehaviorSubject<boolean>(false);
  currentValue = this.openMenu.asObservable();

  constructor() { }

  changeOpenMenu(newValue: boolean) {
    this.openMenu.next(newValue);
  }
}
