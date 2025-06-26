import { Injectable } from '@angular/core';
import { Credential } from '../interfaces/credential';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  credentialList: Array<Credential> = [
    {
      name: 'Sahra Müller',
      project: 'DA Bubble',
      comment: 'credential_1.comment',
      profile: 'LinkedIn Profile',
      link: '',
    },
    {
      name: 'James Rugman',
      project: 'Join',
      comment: 'credential_2.comment',
      profile: 'LinkedIn Profile',
      link: '',
    },
    {
      name: 'Evelyn Marx',
      project: 'Sharkie',
      comment: 'credential_3.comment',
      profile: 'LinkedIn Profile',
      link: '',
    },
  ];

  constructor() { }
}
