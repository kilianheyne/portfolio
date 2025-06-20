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
      comment: '"Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."',
      profile: 'LinkedIn Profile',
    },
    {
      name: 'Sahra Müller',
      project: 'DA Bubble',
      comment: '"Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."',
      profile: 'LinkedIn Profile',
    },
    {
      name: 'Sahra Müller',
      project: 'DA Bubble',
      comment: '"Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person."',
      profile: 'LinkedIn Profile',
    },
  ];

  constructor() { }
}
