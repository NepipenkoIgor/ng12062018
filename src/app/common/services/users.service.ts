import {Inject} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../../config';
import {map} from 'rxjs/internal/operators';

export interface IUser {
  id?: number;
  profileName: string;
  firstName: string;
  surname: string;
  photo?: string;
  country: string;
}

export class UsersService {

  private _date = Date.now();

  constructor(
    @Inject(HttpClient) private _http: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string,
  ) {
  }

  public getUsers(): Observable<IUser[]> {

    return this._http.get<IUser[]>(`${this._baseUrl}/participants?key=1ep1rqq`)
      .pipe(
        map((users: IUser[]) => users.map((user: IUser, i: number) => ({...user, id: i + 1})))
      );
  }

  public getDate(): void {
    console.log(this._date);
  }
}
