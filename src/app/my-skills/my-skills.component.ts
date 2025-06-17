import { Component, inject } from '@angular/core';
import { SkilldataService } from '../skilldata.service';
import { SkillComponent } from "./skill/skill.component";

@Component({
  selector: 'app-my-skills',
  imports: [SkillComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillListData = inject(SkilldataService);

}
