import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Homework12Component } from './homework12/homework12.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Homework13Component } from './homework13/homework13.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Homework14Component } from './homework14/homework14.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Homework12Component,
    Lesson2Component,
    Homework13Component,
    Lesson3Component,
    Homework14Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: []
})
export class AppModule { }
