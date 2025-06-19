import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  // #region attributes

  githubIcon: string = 'assets/images/footer/github-icon.png';
  eMailIcon: string = 'assets/images/footer/e-mail-icon.png';
  linkedinIcon: string = 'assets/images/footer/linkedin-icon.png';

  // #endregion

  // #region methods

  changeIcon(platform: string, hover: boolean):void {
    switch (platform) {
      case ('github'):
        this.githubIcon = hover ? 'assets/images/footer/github-icon-hover.png' : 'assets/images/footer/github-icon.png';
        break;
      case ('e-mail'):
        this.eMailIcon = hover ? 'assets/images/footer/e-mail-icon-hover.png' : 'assets/images/footer/e-mail-icon.png';
        break;
      case ('linkedin'):
        this.linkedinIcon = hover ? 'assets/images/footer/linkedin-icon-hover.png' : 'assets/images/footer/linkedin-icon.png';  
        break;
    }
  }

  //#endregion

}
