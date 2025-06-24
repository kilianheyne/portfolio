import { Component, inject } from '@angular/core';
import { SkilldataService } from '../shared/services/skilldata.service';
import { TranslatePipe, TranslateDirective, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-my-skills',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

  skillListData = inject(SkilldataService);

}
