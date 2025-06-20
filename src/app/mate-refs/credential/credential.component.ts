import { Component, Input } from '@angular/core';
import { Credential } from '../../shared/interfaces/credential';

@Component({
  selector: 'app-credential',
  imports: [],
  templateUrl: './credential.component.html',
  styleUrl: './credential.component.scss'
})
export class CredentialComponent {
  @Input() credential!: Credential;
}
