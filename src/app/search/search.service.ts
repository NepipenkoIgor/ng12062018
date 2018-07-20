import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class SearchService {

  private _searchStream: Subject<string> = new Subject();

  public getSearchTerm() {
    return this._searchStream.asObservable();
  }

  public setSearchTerm(searchTerm: string): void {
    this._searchStream.next(searchTerm);
  }
}
