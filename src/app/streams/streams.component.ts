import { FullImage } from './../_classes/fullImage';
import { Component, OnInit } from '@angular/core';
import { FullImageService } from './../services/full-image.service';
import { PicturesService } from './../services/pictures.service';
import { Picture } from '../_classes/picture';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  pictures: Picture[];

  constructor(
    private picturesService: PicturesService,
    private fullImageService: FullImageService
  ) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures(): void {
    this.picturesService.getPictures().subscribe(pictures => this.pictures = pictures);
  }

  seeInModeFullImage(id: number) {
    this.picturesService.getPicture(id).subscribe(picture => {
      const image = new FullImage();
      image.alt = picture.alt;
      image.src = picture.path;
      this.fullImageService.changeFullImage(image);
    });
  }
}
