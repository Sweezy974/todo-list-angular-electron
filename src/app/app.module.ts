import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoDataService } from './todo-data.service';
import { DbService } from './db.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoDataService, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }


