import { Component } from '@angular/core';
import { BulletPointComponent } from "./bullet-point/bullet-point.component";

@Component({
  selector: 'app-project',
  imports: [BulletPointComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

}
