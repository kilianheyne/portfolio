import { Component, inject } from '@angular/core';
import { SkilldataService } from '../shared/services/skilldata.service';

@Component({
  selector: 'app-my-skills',
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillListData = inject(SkilldataService);

}
