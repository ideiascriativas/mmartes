import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ScrollToModule } from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SlideBackgroundComponent } from './slide-background/slide-background.component';
import { SlideFunctionComponent } from './slide-function/slide-function.component';
import { SearchMinComponent } from './search-min/search-min.component';
import { SearchPageFullComponent } from './search-page-full/search-page-full.component';
import { MenuSideRightComponent } from './menu-side-right/menu-side-right.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SlideContentComponent } from './slide-content/slide-content.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FullImageComponent } from './full-image/full-image.component';
import { StreamsComponent } from './streams/streams.component';
import { ContactComponent } from './contact/contact.component';

import { ShadowRedDirective } from './shadow-red.directive';
import { RainbowEffectDirective } from './rainbow-effect.directive';
import { SearchButtonDirective } from './search-button.directive';
import { SearchIconDirective } from './search-icon.directive';
import { IconMenuDirective } from './icon-menu.directive';
import { UppercaseDirective } from './uppercase.directive';
import { BackImageDirective } from './directives/back-image.directive';

import { SlideService } from './slide.service';
import { MenuService } from './menu.service';
import { SearchService } from './search.service';
import { NewsService } from './services/news.service';
import { ProductLineService } from './services/product-line.service';
import { FullImageService } from './services/full-image.service';
import { PicturesService } from './services/pictures.service';
import { FooterComponent } from './footer/footer.component';

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
    RainbowEffectDirective,
    MenuSideRightComponent,
    SearchIconDirective,
    SearchButtonDirective,
    ButtonMenuComponent,
    IconMenuDirective,
    LoadingComponent,
    NotFoundComponent,
    SlideContentComponent,
    AboutComponent,
    ProductsComponent,
    BackImageDirective,
    FullImageComponent,
    StreamsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [
    SlideService,
    SearchService,
    MenuService,
    NewsService,
    ProductLineService,
    FullImageService,
    PicturesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
