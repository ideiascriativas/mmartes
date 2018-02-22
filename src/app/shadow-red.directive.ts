import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadowRed]'
})
export class ShadowRedDirective {

  @HostBinding('style.box-shadow') boxShadow: string;
  @HostBinding('style.background') bagkground: string;

  constructor() { }

  @HostListener('mouseover') mouseOver() {
    this.bagkground = '#535050';
    this.boxShadow = '0 0 20px -5px #000';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bagkground = 'transparent';
    this.boxShadow = '';
  }

}
