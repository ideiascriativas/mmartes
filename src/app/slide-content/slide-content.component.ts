import { Component, OnInit, Input } from '@angular/core';
import { New } from '../_classes/new';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit {

  @Input('new') new: New;

  constructor() { }

  ngOnInit() {
  }

}
