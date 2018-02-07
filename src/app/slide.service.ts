import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SlideService {

  private slide = new BehaviorSubject<string>('slideOne');
  currentSlide = this.slide.asObservable();

  constructor() { }

  changeSlide(slide: string) {
    this.slide.next(slide);
  }

}
