import { Component, inject, Input } from '@angular/core';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/interfaces/project';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projectListData = inject(ProjectsService);
  @Input() project!: Project;
}
