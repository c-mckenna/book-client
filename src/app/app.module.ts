import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PeopleComponent } from './people/people.component';

const appRoutes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'books', component: BooksComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
