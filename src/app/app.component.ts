import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./landing/header/header.component";
import {ProfileComponent} from "./landing/profile/profile.component";
import {AboutComponent} from "./landing/about/about.component";
import {ExperienceComponent} from "./landing/experience/experience.component";
import {ProjectsComponent} from "./landing/projects/projects.component";
import {ContactComponent} from "./landing/contact/contact.component";
import {FooterComponent} from "./landing/footer/footer.component";
import { CalculatorComponent } from './features/calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent, CalculatorComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'portfolio';
}
