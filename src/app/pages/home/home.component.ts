import { Component } from '@angular/core';
import { SectionHomeComponent } from './components/section-home/section-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
