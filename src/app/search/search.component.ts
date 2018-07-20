import {Component, Input} from '@angular/core';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder: string;

  public constructor(
    private _searchService: SearchService
  ) {
  }

  public onSearch(searchTerm: string): void {
    this._searchService.setSearchTerm(searchTerm);
  }
}
