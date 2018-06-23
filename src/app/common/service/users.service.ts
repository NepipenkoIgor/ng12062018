import { Injectable, Inject } from '@angular/core';
import { debounceTime, delay } from 'rxjs/internal/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../config';

export interface IUser {
  profileName: string;
  'firstName': string;
  'surname': string;
  'photo'?: string;
  'country': string;
}

export class UsersService {

  private _date = Date.now();

  constructor(
    @Inject(HttpClient) private _http: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string,
  ) { }

  public getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(`${this._baseUrl}/participants?key=1ep1rqq`);
  }

  public getDate(): void {
    console.log(this._date);
  }
}
