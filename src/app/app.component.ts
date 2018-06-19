import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser, users$} from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Angular course';
  public logo = 'assets/images/Angular_full_color_logo.png';
  public width = 50;
  public text = 'Search user';

  public users$: Observable<IUser[]> = users$;


  public ngOnInit(): void {
  }

}
