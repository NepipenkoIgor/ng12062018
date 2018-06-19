import {Component, Input} from '@angular/core';
import {IUser} from '../users';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  public position: number;

  @Input()
  public user: IUser;

  @Input()
  public isOdd: boolean;

}
