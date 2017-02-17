import { Component } from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Injectable} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<todo-form></todo-form>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  // title = 'app works!';
  todoTitle = 'Create your own todo list !';
  todos: any;
  errorMessage: "erreur";

  constructor(private TodoDataService : TodoDataService){

  }

  getAllTodos() {
  this.TodoDataService.getAllTodos()
                   .subscribe(
                     todos => this.todos = todos,
                     error =>  this.errorMessage = <any>error);
}

}
