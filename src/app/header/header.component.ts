import { SlideService } from './../slide.service';
import { NewsService } from './../services/news.service';
import { Component, OnInit } from '@angular/core';
import { New } from '../_classes/new';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  news: New[];
  slideCurrent: string;

  constructor(
    private newsService: NewsService,
    private slideService: SlideService
  ) { }

  ngOnInit() {
    this.getNews();
    this.getSlideCurrent();
  }

  getNews(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
    });
  }

  getSlideCurrent(): void {
    this.slideService.currentSlide.subscribe(slide => {
      this.slideCurrent = slide;
    });
  }

  verifySlide(id: number) {
    return id.toString() === this.slideCurrent;
  }
}
