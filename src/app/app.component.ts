import { Component, AfterContentChecked } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, NavigationError, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked{

  isLoading = true;

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngAfterContentChecked() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log('NavigationStart');
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd');
      this.isLoading = false;
    }
    if (event instanceof NavigationCancel) {
      console.log('NavigationCancel');
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      console.log('NavigationError');
      this.isLoading = false;
    }
  }
}
