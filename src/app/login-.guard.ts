import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let personLog = {
    email: '',
    password: ""
  }
  try {
    personLog = JSON.parse(localStorage.getItem('log')!);
    if (personLog) {
      return true;
    } else {
      router.navigate([""])
      return false;
    }
  } catch (error) {
  }
  return true;
};
