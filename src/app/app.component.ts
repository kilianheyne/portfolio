import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { NavComponent } from "./shared/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboveTheFoldComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
