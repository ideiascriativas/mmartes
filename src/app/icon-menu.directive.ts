import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuService } from './menu.service';

@Directive({
  selector: '[appIconMenu]'
})
export class IconMenuDirective implements OnInit {

  @HostBinding('style.transform') transform;
  @HostBinding('style.background') background;
  isClicked: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.currentValue.subscribe(isOpen => this.isClicked = isOpen);
    this.background = this.sanitizer.bypassSecurityTrustStyle('#000');
  }

  @HostListener('click') setTransform() {
    if (this.isClicked) {
      this.changeToVertical();
    } else {
      this.changeToHorizontal();
    }
    this.menuService.changeOpenMenu(!this.isClicked);
  }

  private changeToVertical() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle('rotateZ(0)');
    this.background = this.sanitizer.bypassSecurityTrustStyle('#000');
  }

  private changeToHorizontal() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle('rotateZ(90deg)');
    this.background = this.sanitizer.bypassSecurityTrustStyle('transparent');
  }
}
