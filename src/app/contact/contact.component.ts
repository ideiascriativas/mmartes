import { Contact } from './../_classes/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactUs: Contact;

  constructor() { }

  ngOnInit() {
    this.initVariables();
  }

  initVariables(): void {
    this.contactUs = new Contact();
  }
}
