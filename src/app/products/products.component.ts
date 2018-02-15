import { Component, OnInit } from '@angular/core';

import { ProductLine } from './../_classes/productLine';
import { Product } from './../_classes/product';
import { ProductLineService } from './../services/product-line.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsLine: ProductLine[];

  constructor(
    private productLineService: ProductLineService
  ) { }

  ngOnInit() {
    this.getProductsLine();
  }

  getProductsLine(): void {
    this.productLineService.getProductsLine().subscribe(productsLine => this.productsLine = productsLine);
  }
}
