import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private translate: TranslateService){}

  changeLanguage(lingo: string){
    this.translate.use(lingo);
  }

}
