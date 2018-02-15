import { NEWS } from './../_datas/news.mock';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { New } from '../_classes/new';

@Injectable()
export class NewsService {

  constructor() {}

  getNews(): Observable<New[]> {
    return of(NEWS);
  }

}
