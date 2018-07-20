import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser, UsersService} from '../../../common/services/users.service';
import {SearchService} from '../../../search/search.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users$: Observable<IUser[]>;
  public searchTerm: string;

  public constructor(
    private _usersService: UsersService,
    private _searchService: SearchService,
  ) {
  }

  public ngOnInit(): void {
    this.users$ = this._usersService.getUsers();
    this._searchService.getSearchTerm().subscribe((searchTerm: string) => {
      this.searchTerm = searchTerm;
    });
  }
}
