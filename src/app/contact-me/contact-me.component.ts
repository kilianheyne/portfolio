import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(){
    console.log(this.contactData);
  }

}
