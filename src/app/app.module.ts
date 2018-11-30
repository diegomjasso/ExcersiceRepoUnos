import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FinderComponent } from './finder/finder.component';
import { RepositoriesList } from './finder/repositories_list/repositories_list.component';
import { GITHubAPI } from  './services/github.api';


@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    RepositoriesList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    GITHubAPI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
