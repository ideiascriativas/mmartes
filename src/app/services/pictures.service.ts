import { of } from 'rxjs/observable/of';
import { Picture } from './../_classes/picture';
import { Injectable } from '@angular/core';
import { PICTURES } from './../_datas/pictures.mock';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PicturesService {

  constructor() { }

  getPictures(): Observable<Picture[]> {
    return of(PICTURES);
  }

  getPicture(id: number): Observable<Picture> {
    return of(PICTURES.find(a => a.id === id));
  }
}
