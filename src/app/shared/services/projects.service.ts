import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectList: Array<Project> = [
    {
      name: 'Pokédex',
      duration: 2,
      aboutThisProject: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      howIOrganised: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      whatHaveILearnt: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
      groupWorkExperience: '',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
      },
    {
      name: 'El Pollo Loco',
      duration: 3,
      aboutThisProject: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      howIOrganised: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      whatHaveILearnt: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
      groupWorkExperience: '',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
    },
    {
      name: 'Join',
      duration: 4,
      aboutThisProject: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      howIOrganised: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      whatHaveILearnt: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
      groupWorkExperience: '',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
    },
    {
      name: 'Ongoing Projects',
      duration: 6,
      aboutThisProject: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      howIOrganised: 'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
      whatHaveILearnt: 'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
      groupWorkExperience: '',
      technologies: ['assets/images/my-projects/technologies/html.png', 'assets/images/my-projects/technologies/css.png', 'assets/images/my-projects/technologies/javascript.png'],
      screenshot: 'assets/images/my-projects/placeholder.png',
      liveTestUrl: 'https://kilian-heyne.developerakademie.net/pokedex-umbau/index.html',
      gitHubUrl: 'https://github.com/kilianheyne/pokedex',
    },
  ];


  constructor() { }
}
