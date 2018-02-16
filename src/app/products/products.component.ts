import { FullImage } from './../_classes/fullImage';
import { Component, OnInit } from '@angular/core';

import { ProductLine } from './../_classes/productLine';
import { Product } from './../_classes/product';
import { ProductLineService } from './../services/product-line.service';
import { FullImageService } from '../services/full-image.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsLine: ProductLine[];

  constructor(
    private productLineService: ProductLineService,
    private fullImageService: FullImageService
  ) { }

  ngOnInit() {
    this.getProductsLine();
  }

  getProductsLine(): void {
    this.productLineService.getProductsLine().subscribe(productsLine => this.productsLine = productsLine);
  }

  seeInModeFullImage(idLineProducts: number, idProduct: number) {
    this.productLineService.getProductDetail(idLineProducts, idProduct).subscribe(a => {
      const image = new FullImage();
      image.src = a.image;
      image.alt = a.name;
      this.fullImageService.changeFullImage(image);
    });
  }
}
