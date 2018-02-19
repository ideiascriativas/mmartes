import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SlideService {

  private numberSlide;
  private numberOfTheSlides;
  private slide = new BehaviorSubject<string>('1');
  currentSlide = this.slide.asObservable();

  constructor() {
    this.numberSlide = 1;
    this.numberOfTheSlides = 3;
    this.runSlides();
  }

  private runSlides() {
    setInterval(() => {
      this.getNextSlide();
      this.changeSlide('' + this.numberSlide);
    }, 5000);
  }

  changeSlide(slide: string) {
    this.slide.next(slide);
  }

  private getNextSlide(): void {
    this.numberSlide++;
    if (this.numberSlide > this.numberOfTheSlides) {
      this.numberSlide = 1;
    }
  }
}
