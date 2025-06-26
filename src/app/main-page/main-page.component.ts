import { Component } from '@angular/core';
import { AboveTheFoldComponent } from "../above-the-fold/above-the-fold.component";
import { HeaderComponent } from "../shared/header/header.component";
import { WhyMeComponent } from "../why-me/why-me.component";
import { MySkillsComponent } from "../my-skills/my-skills.component";
import { MyProjectsComponent } from "../my-projects/my-projects.component";
import { MateRefsComponent } from "../mate-refs/mate-refs.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main-page',
  imports: [AboveTheFoldComponent, HeaderComponent, WhyMeComponent, MySkillsComponent, MyProjectsComponent, MateRefsComponent, ContactMeComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
