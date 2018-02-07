import { Directive, HostBinding, HostListener } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective implements OnInit {

  @HostBinding('style.textTransform') textTransform;

  constructor() { }

  ngOnInit() {
    this.initializeFeatures();
  }

  initializeFeatures(): void {
    this.textTransform = 'uppercase';
  }

}
