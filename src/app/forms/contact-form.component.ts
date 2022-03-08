import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  FormData!: FormGroup;

  constructor(private builder: FormBuilder) { }

  public sendEmail(e: Event) {

    e.preventDefault();
    emailjs.sendForm('service_r32dyw6', 'template_hlu2p7e', e.target as HTMLFormElement, '64p8R75AxIDAOTt5q')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error: any) => {
        console.log(error.text);
      });
      console.log("abc")
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.email, Validators.required]),
      Comment: new FormControl('', [Validators.required])
    })
  }

}
