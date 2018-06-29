import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable, of} from 'rxjs';
import {IUser, UsersService} from '../../../common/services/users.service';
import {catchError, map} from 'rxjs/internal/operators';

@Injectable()
export class UserResolveService implements Resolve<IUser | null> {

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser | null> {
    return this._usersService.getUsers()
      .pipe(
        map((users: IUser[]) => {
          const currentUsers = users.find((user: IUser) => user.id.toString() === route.params.userId);

          if (!currentUsers) {
            throw new Error('no user');
          }
          return currentUsers;
        }),
        catchError((err: string) => {
          this._router.navigate(['users']);
          return of(null);
        })
      );
  }
}
