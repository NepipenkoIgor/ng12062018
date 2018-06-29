import { Component } from '@angular/core';
import { UsersService } from '../common/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UsersService]
})
export class HeaderComponent {

  public constructor(
    private _usersService: UsersService
  ) {
    this._usersService.getDate();
  }
}
