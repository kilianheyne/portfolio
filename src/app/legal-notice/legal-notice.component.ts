import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MobileHeaderComponent } from "../shared/mobile-header/mobile-header.component";

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, FooterComponent, TranslatePipe, TranslateDirective, MobileHeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
