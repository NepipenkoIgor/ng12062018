import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = 'Angular course';
  public logo = 'assets/images/Angular_full_color_logo.png';
  public width = 50;

  constructor() { }

  ngOnInit() {
  }

  public onSearch(value: string): void {
    console.log(value);
  }
}
