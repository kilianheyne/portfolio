import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: "",
  }

  onSubmit(form: NgForm){
    if (form.valid && form.submitted) {
      console.log(this.contactData);
    }
  }

}
