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
import { Lesson4Component } from './lesson4/lesson4.component';
import { Homework15Component } from './homework15/homework15.component';
import { SearchPipe } from './homework15/search.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { NgModalComponent } from './lesson4/ng-modal/ng-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Homework12Component,
    Lesson2Component,
    Homework13Component,
    Lesson3Component,
    Homework14Component,
    Lesson4Component,
    Homework15Component,
    SearchPipe,
    NgModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
  entryComponents: []
})
export class AppModule { }
