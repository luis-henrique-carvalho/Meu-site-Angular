import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_8nret1k',
        'template_ow3u5h8',
        e.target as HTMLFormElement,
        'CB9TjnM6JSnB0plKc'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  constructor() {}

  ngOnInit(): void {}
}
