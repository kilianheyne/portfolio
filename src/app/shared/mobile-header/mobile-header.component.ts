import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-mobile-header',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent {

  isOpen: boolean = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  // #region attributes

  activeLanguage: string = '';
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
    this.isOpen = false;
  }

  // #endregion
}
