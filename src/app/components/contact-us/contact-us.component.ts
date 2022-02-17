import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
// import { SpinnersAngularModule } from 'spinners-angular';
@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css',]
})

export class ContactUsComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_sk6hp6d', 'template_vdv9t06', e.target as HTMLFormElement, 'user_KXq2TtnmGdyIEXStwryjn')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
