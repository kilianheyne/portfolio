import { Component, Input } from '@angular/core';
import { Credential } from '../../shared/interfaces/credential';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-credential',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './credential.component.html',
  styleUrl: './credential.component.scss'
})
export class CredentialComponent {
  @Input() credential!: Credential;
}
