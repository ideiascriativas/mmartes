import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FullImage } from './../_classes/fullImage';

@Injectable()
export class FullImageService {

  private image: FullImage;
  private currentFullImage;
  private openFullImage;
  public fullImage: Observable<FullImage>;
  public isOpen: Observable<boolean>;

  constructor() {
    this.initValues();
  }

  initValues() {
    this.openFullImage = new BehaviorSubject<boolean>(false);
    this.isOpen = this.openFullImage.asObservable();
    this.image = new FullImage();
    this.image.src = 'assets/images/about/whoami.png';
    this.image.alt = 'teste';
    this.currentFullImage = new BehaviorSubject<FullImage>(this.image);
    this.fullImage = this.currentFullImage.asObservable();
  }

  changeFullImage(fullImage: FullImage) {
    this.currentFullImage.next(fullImage);
    this.openFullImage.next(true);
  }

  closeOpenImage() {
    this.currentFullImage.next(this.image);
    this.openFullImage.next(false);
  }
}
