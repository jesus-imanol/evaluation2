import { Component } from '@angular/core';
import { FormGroup,FormControl ,ReactiveFormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-login.component.html',
  styleUrl: './section-login.component.css'
})
export class SectionLoginComponent {
login : FormGroup;
 constructor(readonly loginService: LoginService, readonly route : Router){
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
    if(this.loginService.logearse(this.login.value.email, this.login.value.password)){
      this.route.navigate(["/home"])
    }else{
      alert("Login fallido")
    }
  }
 }
}
