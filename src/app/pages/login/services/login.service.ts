import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor() { }
  logearse(email: string, password:string) : boolean{
        let person = {
          email: email,
          password: password
        }
localStorage.setItem("log", JSON.stringify(person))
  if(person){
    return true;
  }else{
    return false;
  }
}
}
