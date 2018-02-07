import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadowRed]'
})
export class ShadowRedDirective {

  @HostBinding('style.box-shadow') boxShadow: string;
  @HostBinding('style.background') bagkground: string;

  constructor() { }

  @HostListener('mouseover') mouseOver() {
    this.bagkground = '#a7474c';
    this.boxShadow = '0 0 20px -5px #fff';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bagkground = 'transparent';
    this.boxShadow = '';
  }

}
