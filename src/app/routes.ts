import {Route} from '@angular/router';
import {UsersComponent} from './content/users/users.component';
import {NotFoundComponent} from './content/not-found/not-found.component';
import {UsersListComponent} from './content/users/users-list/users-list.component';
import {UserComponent} from './content/users/user/user.component';
import {UserResolveService} from './content/users/user/user-resolve.service';

export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':userId',
        component: UserComponent,
        data: {
          title: 'User Info'
        },
        resolve: {
          user: UserResolveService
        }
      },
      {
        path: '**',
        redirectTo: '/info'
      }
    ]
  },
  {
    path: 'info',
    loadChildren: './content/info/info.module#InfoModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
