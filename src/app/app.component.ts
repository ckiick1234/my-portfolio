import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutComponent} from "./components/about/about.component";
import {ExperienceComponent} from "./components/experience/experience.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";
import { TextFunctionService } from './text-function.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProfileComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  providers: [TextFunctionService]
})
export class AppComponent {
  title = 'portfolio';

  constructor(private textFunctionService: TextFunctionService) {

    this.textFunctionService.getText().subscribe({
      next: (text) => {
        console.log('Received text:', text);
      },
      error: (err) => {
        console.error('Error fetching text:', err);
      }
    });
  }
}
