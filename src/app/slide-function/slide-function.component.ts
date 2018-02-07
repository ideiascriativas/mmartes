import { Component, OnInit } from '@angular/core';
import { SlideService } from '../slide.service';

@Component({
  selector: 'app-slide-function',
  templateUrl: './slide-function.component.html',
  styleUrls: ['./slide-function.component.scss']
})
export class SlideFunctionComponent implements OnInit {

  slide: string;

  constructor(
    private slideService: SlideService
  ) { }

  ngOnInit() {
    this.initSlide();
  }

  initSlide(): void {
    this.slideService.currentSlide.subscribe(slide => this.slide = slide);
  }

  updateSlide(slide: string): void {
    this.slideService.changeSlide(slide);
  }

}
