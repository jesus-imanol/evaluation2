import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let personLog = {
    email: '',
    password: ""
  }
  try {
    personLog = JSON.parse(localStorage.getItem('personLog')!);
    if (personLog) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
  }
  return true;
};
