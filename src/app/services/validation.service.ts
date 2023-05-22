import { ElementRef, Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public data: any;
  constructor() { }

  static mailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nameRe = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      const isValidLogin = nameRe.test(control.value);
      return !isValidLogin ? {invalid: true} : null;
    };
  }

  scroll() {

  }
}
