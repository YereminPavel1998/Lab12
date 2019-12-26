import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    ViewPersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
