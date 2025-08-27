import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  private experienceItems: ExperienceItem[] = [
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    {name: "Docker", src: "./assets/technologies/docker.png"},
    {name: ".NET Framework", src: "./assets/technologies/DotNetFramework.jpg"},
    {name: ".NET 8", src: "./assets/technologies/DotNet8.webp"},
    {name: "SQL", src: "./assets/technologies/SQL.jfif"},
    {name: "MongoDB", src: "./assets/technologies/MongoDB.png"},
    {name: "SSIS", src: "./assets/technologies/SSIS.png"},
    {name: "Tableau", src: "./assets/technologies/Tableau.png"},
    {name: "Node.js", src: "./assets/technologies/NodeJS.png"},
    {name: "Aspose", src: "./assets/technologies/Aspose.svg"},
    {name: "Azure", src: "./assets/technologies/Azure.png"},
    {name: "Azure DevOps", src: "./assets/technologies/AzureDevOps.jpg"},
    {name: "Entity Framework", src: "./assets/technologies/EntityFramework.jpg"},
    {name: "Mongoose", src: "./assets/technologies/Mongoose.png"},
    {name: "NUnit", src: "./assets/technologies/NUnit.svg"}
  ];

  // needed to create an infinite-like scroll effect
  get getExperience(): ExperienceItem[] {
    return Array.from({ length: 10 }, (_, i: number) =>
      this.experienceItems.map((item: ExperienceItem, index: number) => ({
        ...item, index: i * this.experienceItems.length + index
      }))
    ).flat();
  }

}
