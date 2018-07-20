import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {CardComponent} from './content/users/users-list/card/card.component';
import {UsersFilterPipe} from './common/pipes/users-filter.pipe';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {UsersService} from './common/services/users.service';
import {HttpClientModule} from '@angular/common/http';

import {environment} from '../environments/environment';
import {BASE_URL} from './config';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {UsersComponent} from './content/users/users.component';
import {MenuComponent} from './header/menu/menu.component';
import {NotFoundComponent} from './content/not-found/not-found.component';
import {UsersListComponent} from './content/users/users-list/users-list.component';
import {UserComponent} from './content/users/user/user.component';
import {UserResolveService} from './content/users/user/user-resolve.service';
import {CustomPreloadService} from './common/services/custom-preload.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchService} from './search/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UsersFilterPipe,
    TooltipDirective,
    UsersComponent,
    MenuComponent,
    NotFoundComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadService})
  ],
  providers: [
    UsersService,
    SearchService,
    UserResolveService,
    CustomPreloadService,
    {provide: BASE_URL, useValue: environment.base_url},
    {provide: 'BASE_URL', useValue: 'localhost:4200'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
