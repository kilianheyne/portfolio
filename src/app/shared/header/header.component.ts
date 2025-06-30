import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // #region attributes

  activeLanguage: string = 'en';
  hoveredLanguage: string = '';
  activeNav: string = '';

  // #endregion
  // #region constructor

  constructor(private translate: TranslateService){} //ngx-library for translation

  // #endregion
  // #region methods

  changeLanguage(lingo: string){ //button in header have "lingo" 'de' or 'en'
    this.translate.use(lingo); // chosing the needed json for translation in ngx-translate
    this.activeLanguage = lingo; // caching language
  }

  setActiveNav (navTag: string){
    this.activeNav = navTag; 
  }

  // #endregion
}
