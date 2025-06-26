import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectList: Array<Project> = [
    {
      name: 'DA Bubble',
      duration: 3,
      aboutThisProject: 'project_card_1.aboutThisProject',
      howIOrganised: 'project_card_1.howIOrganised',
      whatHaveILearnt: '',
      groupWorkExperience: 'project_card_1.groupWorkExperience',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder/da-bubble.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
      groupProject: true,
      },
    {
      name: 'Sharkie',
      duration: 5,
      aboutThisProject: 'project_card_2.aboutThisProject',
      howIOrganised: 'project_card_2.howIOrganised',
      whatHaveILearnt: 'project_card_2.learnings',
      groupWorkExperience: '',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder/sharkie.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
      groupProject: false,
    },
    {
      name: 'Join',
      duration: 8,
      aboutThisProject: 'project_card_3.aboutThisProject',
      howIOrganised: 'project_card_3.howIOrganised',
      whatHaveILearnt: '',
      groupWorkExperience: 'project_card_3.groupWorkExperience',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder/join.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
      groupProject: true,
    },
    {
      name: 'projects.ongoing',
      duration: 6,
      aboutThisProject: 'project_card_4.aboutThisProject',
      howIOrganised: '',
      whatHaveILearnt: '',
      groupWorkExperience: '',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder/coming-soon.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
      groupProject: false,
    },
  ];


  constructor() { }
}
