import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UsersService, IUser } from '../../../../common/services/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [UsersService]
})
export class CardComponent {

  @Input()
  public position: number;

  @Input()
  public user: IUser;

  @Input()
  public isOdd: boolean;

  public constructor(
    private _usersService: UsersService
  ) {
    this._usersService.getDate();
  }

}
