import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';

@Injectable({
    providedIn: 'root',
})
export class ProjectsService {
    projectList: Array<Project> = [
        {
            name: 'Pokédex',
            duration: 2,
            aboutThisProject: 'project_card_1.aboutThisProject',
            howIOrganised: 'project_card_1.howIOrganised',
            whatHaveILearnt: 'project_card_1.learnings',
            groupWorkExperience: 'project_card_1.groupWorkExperience',
            techs: ['HTML', 'CSS', 'Javascript'],
            technologies: [
                'assets/images/my-projects/technologies/html.png',
                'assets/images/my-projects/technologies/css.png',
                'assets/images/my-projects/technologies/javascript.png',
            ],
            screenshot: 'assets/images/my-projects/screenshots/pokedex.png',
            liveTestUrl:
                'https://pokedex.webdev-kilian.de/',
            gitHubUrl: 'https://github.com/kilianheyne/pokedex',
            groupProject: false,
        },
        {
            name: 'El Pollo Loco',
            duration: 3,
            aboutThisProject: 'project_card_2.aboutThisProject',
            howIOrganised: 'project_card_2.howIOrganised',
            whatHaveILearnt: 'project_card_2.learnings',
            groupWorkExperience: '',
            techs: ['HTML', 'CSS', 'Javascript'],
            technologies: [
                'assets/images/my-projects/technologies/html.png',
                'assets/images/my-projects/technologies/css.png',
                'assets/images/my-projects/technologies/javascript.png',
            ],
            screenshot:
                'assets/images/my-projects/screenshots/el-pollo-loco.png',
            liveTestUrl:
                'https://el-pollo-loco.webdev-kilian.de/',
            gitHubUrl: 'https://github.com/kilianheyne/el-pollo-loco',
            groupProject: false,
        },
        {
            name: 'Join',
            duration: 2.5,
            aboutThisProject: 'project_card_3.aboutThisProject',
            howIOrganised: 'project_card_3.howIOrganised',
            whatHaveILearnt: '',
            groupWorkExperience: 'project_card_3.groupWorkExperience',
            techs: ['HTML', 'SCSS', 'Typescript', 'Angular', 'Firebase'],
            technologies: [
                'assets/images/my-projects/technologies/html.png',
                'assets/images/my-projects/technologies/css.png',
                'assets/images/my-projects/technologies/typescript.png',
                'assets/images/my-projects/technologies/angular.png',
                'assets/images/my-projects/technologies/firebase.png',
            ],
            screenshot: 'assets/images/my-projects/screenshots/join.png',
            liveTestUrl: 'https://join.webdev-kilian.de/#/login',
            gitHubUrl: 'https://github.com/kilianheyne/join',
            groupProject: true,
        },
        {
            name: 'projects.ongoing',
            duration: 3,
            aboutThisProject: 'project_card_4.aboutThisProject',
            howIOrganised: '',
            whatHaveILearnt: '',
            groupWorkExperience: '',
            techs: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Vue.js', 'React'],
            technologies: [
                'assets/images/my-projects/technologies/html.png',
                'assets/images/my-projects/technologies/css.png',
                'assets/images/my-projects/technologies/typescript.png',
                'assets/images/my-projects/technologies/angular.png',
                'assets/images/my-projects/technologies/firebase.png',
            ],
            screenshot: 'assets/images/my-projects/placeholder/coming-soon.png',
            liveTestUrl: 'https://github.com/kilianheyne',
            gitHubUrl: 'https://github.com/kilianheyne',
            groupProject: false,
        },
    ];

    constructor() {}
}
