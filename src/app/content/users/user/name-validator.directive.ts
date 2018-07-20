import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';

@Directive({
  selector: '[appNameValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: nameValidator,
    multi: true
  }]
})
export class NameValidatorDirective {
}

function nameValidator(control: FormControl): ValidationErrors | null {
  const value: string = control.value;
  const valid: boolean = /^[a-zA-Z]*$/.test(value);
  const err = valid
    ? null
    : {nospecial: true};
  return err;
}
