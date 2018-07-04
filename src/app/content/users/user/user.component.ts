import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../../common/services/users.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public title: string;
  public user: IUser;

  public userForm: FormGroup;


  public formWithEmails: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.userForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), this._nameValidator]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['',
          [Validators.required, Validators.minLength(4)]],
        cpassword: ['',
          [Validators.required, Validators.minLength(4)]],
      }, {
        asyncValidator: [this._asyncEqualValidator]
      })
    });


    console.log('Snapshot', this._activatedRoute.snapshot.params);
    this.title = this._activatedRoute.snapshot.data.title;
    this.user = this._activatedRoute.snapshot.data.user;
    this._activatedRoute
      .params
      .subscribe((params: { userId: string }) => {
        console.log(params.userId);
      });
  }


  public addEmail(): void {
    (this.formWithEmails.get('emails') as FormArray)
      .push(new FormControl(''));
  }

  public removeEmail(index: number): void {
    (this.formWithEmails.get('emails') as FormArray)
      .removeAt(index);
  }

  public send(formObj): void {

  }

  private _nameValidator(control: FormControl): ValidationErrors | null {
    const value: string = control.value;
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const err = valid
      ? null
      : {nospecial: true};
    return err;
  }


  private _asyncEqualValidator({value}: FormGroup): Observable<ValidationErrors | null> {
    const [first, ...rest] = Object.keys(value || {});
    const valid: boolean = rest.every((v: string) => value[v] === value[first]);

    const err = valid
      ? null
      : {noequal: true};
    return of(err).pipe(delay(5000));
  }
}

