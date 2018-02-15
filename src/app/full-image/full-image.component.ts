import { FullImage } from './../_classes/fullImage';
import { Component, OnInit } from '@angular/core';
import { FullImageService } from '../services/full-image.service';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.scss']
})
export class FullImageComponent implements OnInit {

  openImageFull: boolean;

  image: FullImage;

  constructor(
    private fullImageService: FullImageService
  ) { }

  ngOnInit() {
    this.initAttributes();
  }

  closeOpenImage() {
    this.fullImageService.closeOpenImage();
  }

  private initAttributes(): void {
    this.fullImageService.isOpen.subscribe(open => {
      this.openImageFull = open;
    });
    this.fullImageService.fullImage.subscribe(fullImage => {
      this.image = fullImage;
    });
  }
}
