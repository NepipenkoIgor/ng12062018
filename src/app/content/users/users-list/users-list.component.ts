import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser, UsersService} from '../../../common/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users$: Observable<IUser[]>;

  public constructor(
    private _usersService: UsersService
  ) {
  }

  public ngOnInit(): void {
    this.users$ = this._usersService.getUsers();
  }
}
