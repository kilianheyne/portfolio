import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

    // #region attributes

    githubIcon: string = 'assets/images/hero-section/contact-icons/github.png';
    eMailIcon: string = 'assets/images/hero-section/contact-icons/e-mail.png';
    linkedinIcon: string = 'assets/images/hero-section/contact-icons/linkedin.png';
  
    // #endregion
  
    // #region methods
  
    changeIcon(platform: string, hover: boolean):void {
      switch (platform) {
        case ('github'):
          this.githubIcon = hover ? 'assets/images/hero-section/contact-icons/github-hover.png' : 'assets/images/hero-section/contact-icons/github.png';
          break;
        case ('e-mail'):
          this.eMailIcon = hover ? 'assets/images/hero-section/contact-icons/e-mail-hover.png' : 'assets/images/hero-section/contact-icons/e-mail.png';
          break;
        case ('linkedin'):
          this.linkedinIcon = hover ? 'assets/images/hero-section/contact-icons/linkedin-hover.png' : 'assets/images/hero-section/contact-icons/linkedin.png';  
          break;
      }
    }
  
    //#endregion

}
