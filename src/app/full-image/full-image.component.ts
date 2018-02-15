import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.scss']
})
export class FullImageComponent implements OnInit {

  image = {
    src: 'assets/images/teste4.jpg',
    alt: 'teste4'
  };

  constructor() { }

  ngOnInit() {
  }

}
