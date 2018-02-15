import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ProductLine } from './../_classes/productLine';
import { PRODUCTS_LINE } from './../_datas/productsLine.mock';
import { Product } from '../_classes/product';

@Injectable()
export class ProductLineService {

  constructor() { }

  getProductsLine(): Observable<ProductLine[]> {
    return of(PRODUCTS_LINE);
  }

  getProductDetail(idProductLine: number, idProduct: number): Observable<Product> {
    return of(PRODUCTS_LINE.find(a => a.id === idProductLine).products.find(a => a.id === idProduct));
  }
}
