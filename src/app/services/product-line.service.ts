import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductLine } from './../_classes/productLine';
import { PRODUCTS_LINE } from './../_datas/productsLine.mock';

@Injectable()
export class ProductLineService {

  constructor() { }

  getProductsLine(): Observable<ProductLine[]> {
    return of(PRODUCTS_LINE);
  }
}
