import { FormGroup,FormsModule,FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import emailjs,{ EmailJSResponseStatus } from 'emailjs-com';
import { ContactFormComponent } from './forms/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LandingPage';

  employeeForm!: FormGroup;
  category!: String;


  constructor(
    public dialog: MatDialog,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({

    })
  }



  CommonApplyButton(){
    let dialogRef = this.dialog.open(ContactFormComponent, {
      height: '400px',
      width: '600px',
    });
  }
  setCategory(text:string){
    this.category = text;
  }
  public sendEmail(e: Event,a:number=0) {
    debugger
    var  template = "template_hlu2p7e";
    if(a===1){
      template="template_anixppa";
    }
    e.preventDefault();
    emailjs.sendForm('service_r32dyw6', template, e.target as HTMLFormElement, '64p8R75AxIDAOTt5q')
      .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.employeeForm.reset();
      alert("Application submitted successfully.\nThank you for showing your interest...");

      }, (error: any) => {
        console.log(error.text);
      });
  }

}
