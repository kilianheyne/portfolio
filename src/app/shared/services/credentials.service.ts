import { Injectable } from '@angular/core';
import { Credential } from '../interfaces/credential';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  credentialList: Array<Credential> = [
    {
      name: 'Irene Kober',
      project: 'DA Bubble',
      comment: 'credential_1.comment',
      profile: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/irene-kober-2570961a1/',
    },
    {
      name: 'Samaneh Papoli',
      project: 'Join',
      comment: 'credential_2.comment',
      profile: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/samaneh-papoli-3704702a7/',
    },
    {
      name: 'Jan Gerardi',
      project: 'Join',
      comment: 'credential_3.comment',
      profile: 'LinkedIn Profile',
      link: 'https://github.com/JanGerardi',
    },
  ];

  constructor() { }
}
