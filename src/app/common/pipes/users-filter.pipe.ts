import {Pipe, PipeTransform} from '@angular/core';
import { IUser } from '../services/users.service';

@Pipe({
  name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

  public transform(users: IUser[], searchTerm: string): IUser[] {
    if (!searchTerm) {
      return users;
    }
    return users.filter((user: IUser) => {
      return `${user.firstName} ${user.surname}`
        .toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
