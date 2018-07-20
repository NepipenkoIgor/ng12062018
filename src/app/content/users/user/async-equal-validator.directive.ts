import {Directive} from '@angular/core';
import {FormGroup, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {delay} from 'rxjs/internal/operators';

@Directive({
  selector: '[appAsyncEqualValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useValue: asyncEqualValidator,
    multi: true
  }]
})
export class AsyncEqualValidatorDirective {


}

function asyncEqualValidator({value}: FormGroup): Observable<ValidationErrors | null> {
  const [first, ...rest] = Object.keys(value || {});
  const valid: boolean = rest.every((v: string) => value[v] === value[first]);

  const err = valid
    ? null
    : {noequal: true};
  return of(err).pipe(delay(5000));
}
