import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/ckiick1234',
    },
    {
      name: 'Data Science Project: The Battle of Neighborhoods',
      description: 'A data science project analyzing Tallinn\'s neighborhoods using data from Foursquare, Wikipedia, and transport sites. It identifies ideal residential areas through clustering and regression techniques.',
      technologies: ['Python', 'Jupiter Notebook', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Foursquare API'],
      src: './assets/projects/data-science.png',
      link: 'https://github.com/ckiick1234',
    }
  ];
}
