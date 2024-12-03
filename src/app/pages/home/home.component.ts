import { Component } from '@angular/core';
import { SectionHomeComponent } from './components/section-home/section-home.component';
import { HeaderComponent } from "../../header/header.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionHomeComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
