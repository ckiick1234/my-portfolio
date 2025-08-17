import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/sebastiano-fazzino/', '_blank');
  }

  get email(): string {
    return 'sebastianofazzino92@gmail.com';
  }
}
