import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  title = 'MM Artes e Brindes';
  isLoading: boolean;

  constructor(
    private router: Router
  ) {
    this.isLoading = false;
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (event instanceof NavigationCancel || event instanceof NavigationEnd) {
        this.isLoading = false;
      }
    });
  }
}
