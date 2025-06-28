import { Component, inject, Input } from '@angular/core';
import { ProjectsService } from '../../shared/services/projects.service';
import { Project } from '../../shared/interfaces/project';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-projects',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './mobile-projects.component.html',
  styleUrl: './mobile-projects.component.scss'
})
export class MobileProjectsComponent {

  projectListData = inject(ProjectsService);
  @Input() project!: Project; 
}
