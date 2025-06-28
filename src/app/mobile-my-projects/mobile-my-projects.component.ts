import { Component, inject } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MobileProjectsComponent } from './mobile-projects/mobile-projects.component';
import { ProjectsService } from '../shared/services/projects.service';

@Component({
  selector: 'app-mobile-my-projects',
  imports: [TranslatePipe, TranslateDirective, MobileProjectsComponent],
  templateUrl: './mobile-my-projects.component.html',
  styleUrl: './mobile-my-projects.component.scss'
})
export class MobileMyProjectsComponent {

  projectListData = inject(ProjectsService);

  selectedProjectIndex: number = 0;
}
