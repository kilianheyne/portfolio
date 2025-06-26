import { Component, inject } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { ProjectsService } from '../shared/services/projects.service';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects',
  imports: [ProjectComponent, TranslatePipe, TranslateDirective],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {

  projectListData = inject(ProjectsService);

  selectedProjectIndex: number = 0;
}
