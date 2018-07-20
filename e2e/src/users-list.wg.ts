import {by, element, ElementArrayFinder} from 'protractor';


export class UsersListWidget {
  public cards: ElementArrayFinder;

  public constructor() {
    this.cards = element.all(by.css('app-card'));
  }
}
