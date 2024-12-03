import { Component } from '@angular/core';
import { SectionLoginComponent } from './components/section-login/section-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SectionLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
