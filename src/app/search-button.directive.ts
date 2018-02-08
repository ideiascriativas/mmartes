import { Directive, ContentChild, HostListener } from '@angular/core';
import { SearchIconDirective } from './search-icon.directive';

@Directive({
  selector: '[appSearchButton]'
})
export class SearchButtonDirective {

  @ContentChild(SearchIconDirective) img: SearchIconDirective;

  constructor() { }

  @HostListener('mouseover') entryInButton() {
    this.img.changeToRed();
  }

  @HostListener('mouseleave') leaveButton() {
    this.img.changeToWhite();
  }

}
