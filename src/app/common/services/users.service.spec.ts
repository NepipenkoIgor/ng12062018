import {fakeAsync, inject, TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UsersService} from './users.service';
import {environment} from '../../../environments/environment';
import {BASE_URL} from '../../config';


describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UsersService,
        {provide: BASE_URL, useValue: environment.base_url},
      ]
    });
  });

  it('should work with REST',
    fakeAsync(inject([UsersService, HttpTestingController],
      (_usersService: UsersService, _backend: HttpTestingController) => {

        _usersService.getUsers().subscribe((users) => {
          expect(Array.isArray(users)).toBeTruthy();
          expect(users.length).toEqual(3);
        });

        _backend.expectOne({
          method: 'GET',
          url: `${environment.base_url}/participants?key=1ep1rqq`
        }).flush([1, 2, 3]);

      })));
});
