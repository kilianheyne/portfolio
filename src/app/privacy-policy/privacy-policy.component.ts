import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { MobileHeaderComponent } from "../shared/mobile-header/mobile-header.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, MobileHeaderComponent, FooterComponent, TranslateDirective, TranslatePipe],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
