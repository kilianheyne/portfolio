import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule],
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
