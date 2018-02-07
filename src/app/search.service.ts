import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  private openSearch = new BehaviorSubject<boolean>(false);
  currentActionSearch = this.openSearch.asObservable();

  constructor() { }

  updateSearch(action: boolean) {
    this.openSearch.next(action);
  }

}
