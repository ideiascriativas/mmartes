import { Component, OnInit } from '@angular/core';
import { SlideService } from '../slide.service';

@Component({
  selector: 'app-slide-background',
  templateUrl: './slide-background.component.html',
  styleUrls: ['./slide-background.component.scss']
})
export class SlideBackgroundComponent implements OnInit {

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

}
