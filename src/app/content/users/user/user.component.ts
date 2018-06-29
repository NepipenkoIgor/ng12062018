import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../../common/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public title: string;
  public user: IUser;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {

    console.log('Snapshot', this._activatedRoute.snapshot.params);
    this.title = this._activatedRoute.snapshot.data.title;
    this.user = this._activatedRoute.snapshot.data.user;
    this._activatedRoute
      .params
      .subscribe((params: { userId: string }) => {
        console.log(params.userId);
      });
  }

}
