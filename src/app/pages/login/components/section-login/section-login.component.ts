import { Component } from '@angular/core';
import { FormGroup,FormControl ,ReactiveFormsModule, Validators} from '@angular/forms';
@Component({
  selector: 'app-section-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-login.component.html',
  styleUrl: './section-login.component.css'
})
export class SectionLoginComponent {
login : FormGroup;
 constructor(){
  this.login = new FormGroup({
    email : new FormControl('', Validators.email),
    password: new FormControl("", Validators.required)
  });
 }
 sesion(){
  if(this.login.invalid){
    alert("Por favor complete los campos bien")
  }
  else{
    
  }
 }
}
