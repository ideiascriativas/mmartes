import { Directive, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Directive({
  selector: '[appSearchIcon]'
})
export class SearchIconDirective {

  @HostBinding('attr.src') src: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    this.src = this.sanitizer.bypassSecurityTrustUrl('/assets/icons/search-white.svg');
  }

  public changeToRed() {
    this.src = this.sanitizer.bypassSecurityTrustUrl('/assets/icons/search.svg');
  }

  public changeToWhite() {
    this.src = this.sanitizer.bypassSecurityTrustUrl('/assets/icons/search-white.svg');
  }
}
