import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatInputModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { UsersFilterPipe } from './common/pipes/users-filter.pipe';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { UsersService } from './common/service/users.service';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { BASE_URL } from './config';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UsersFilterPipe,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    { provide: BASE_URL, useValue: environment.base_url},
    { provide: 'BASE_URL', useValue: 'localhost:4200'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
