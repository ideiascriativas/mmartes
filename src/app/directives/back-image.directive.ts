import { Directive, Input, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
  selector: '[appBackImage]'
})
export class BackImageDirective implements OnInit {

  @HostBinding('style.background') background: SafeStyle;
  @Input() imageBackground: string;


  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (this.imageBackground.indexOf('/') >= 0) {
      this.background = this.sanitizer.bypassSecurityTrustStyle(`url('${this.imageBackground}') no-repeat fixed`);
    } else {
      this.background = this.sanitizer.bypassSecurityTrustStyle(this.imageBackground);
    }
  }
}
