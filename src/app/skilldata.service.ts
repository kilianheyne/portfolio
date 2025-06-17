import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SkilldataService {
    skillList: Array<object> = [
      {
        image: 'assets/images/my-skills/angular.png',
        name: 'Angular',
      },
      {
        image: 'assets/images/my-skills/typescript.png',
        name: 'TypeScript',
      },
      {
        image: 'assets/images/my-skills/javascript.png',
        name: 'JavaScript',
      },
      {
        image: 'assets/images/my-skills/html.png',
        name: 'HTML',
      },
      {
        image: 'assets/images/my-skills/css.png',
        name: 'CSS',
      },
      {
        image: 'assets/images/my-skills/rest-api.png',
        name: 'Rest-API',
      },
      {
        image: 'assets/images/my-skills/git.png',
        name: 'GIT',
      },
    ];

    constructor() {}
}
