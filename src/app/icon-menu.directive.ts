import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuService } from './menu.service';

@Directive({
  selector: '[appIconMenu]'
})
export class IconMenuDirective implements OnInit {

  @HostBinding('style.transform') transform;
  isClicked: boolean;

  constructor(
    private sanitizer: DomSanitizer,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menuService.currentValue.subscribe(isOpen => this.isClicked = isOpen);
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
  }

  private changeToHorizontal() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle('rotateZ(90deg)');
  }
}
