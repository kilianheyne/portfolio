import { Component, inject } from '@angular/core';
import { CredentialsService } from '../shared/services/credentials.service';
import { CredentialComponent } from './credential/credential.component';

@Component({
  selector: 'app-mate-refs',
  imports: [CredentialComponent],
  templateUrl: './mate-refs.component.html',
  styleUrl: './mate-refs.component.scss'
})
export class MateRefsComponent {

  credentialData = inject(CredentialsService);

}
