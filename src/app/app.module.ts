import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { UppercaseDirective } from './uppercase.directive';
import { SlideBackgroundComponent } from './slide-background/slide-background.component';
import { SlideFunctionComponent } from './slide-function/slide-function.component';
import { SlideService } from './slide.service';
import { SearchMinComponent } from './search-min/search-min.component';
import { ShadowRedDirective } from './shadow-red.directive';
import { SearchPageFullComponent } from './search-page-full/search-page-full.component';
import { RainbowEffectDirective } from './rainbow-effect.directive';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    UppercaseDirective,
    SlideBackgroundComponent,
    SlideFunctionComponent,
    SearchMinComponent,
    ShadowRedDirective,
    SearchPageFullComponent,
    RainbowEffectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SlideService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
