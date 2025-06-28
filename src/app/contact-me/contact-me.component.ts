import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-contact-me',
  imports: [FormsModule, CommonModule, TranslatePipe, TranslateDirective, RouterLink],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  // #region attributes

  contactData = {
    name: "",
    email: "",
    message: "",
    privacyPolicy: false,
  }

  isMobile: boolean = false; 

  placeholderText = {
    name: '',
    email: '',
    message: '',
  }

  mailTest: boolean = true;

  post = {
    endPoint: 'https://webdev-kilian.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  http = inject(HttpClient);

  // #endregion
  // #region constructor

  constructor(private translate: TranslateService, private breakpointObserver: BreakpointObserver){
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe(result => {
      this.isMobile = result.matches;
      this.setPlaceholders();
    });

    this.translate.onLangChange.subscribe(() => {
      this.setPlaceholders(); //update on changing language
    })
  }

  // #endregion
  // #region methods
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  setPlaceholders() {
    if (this.isMobile) {
      this.placeholderText.name = this.translate.instant('contact-me.name');
      this.placeholderText.email = this.translate.instant('contact-me.email');
      this.placeholderText.message = this.translate.instant('contact-me.msg');
    } else {
      this.placeholderText = {name: '', email: '', message: ''};
    }
  }

  getPlaceholder(field: 'name' | 'email' | 'message', control: NgModel): string {
    if (control?.touched && control?.invalid) {
      switch (field) {
        case 'name':
          return this.translate.instant('contact-me.error_name');
        case 'email':
          if (control.errors?.['required']) {
            return this.translate.instant('contact-me.error_email');
          } else if (control.errors?.['pattern']) {
            return this.translate.instant('contact-me.error_email_2');
          }
          break;
        case 'message':
          if (control.errors?.['required']) {
            return this.translate.instant('contact-me.error_msg');
          } else if (control.errors?.['minlength']) {
            return this.translate.instant('contact-me.error_msg_2') + ' ' +
                    control.errors['minlength'].requiredLength + ' ' +
                    this.translate.instant('contact-me.error_msg_3') + ' (' +
                    this.translate.instant('contact-me.error_msg_4') + ' ' +
                    control.errors['minlength'].actualLength + ')';
          }
          break;
      }
    }
  
    return this.placeholderText[field];
  }
}
