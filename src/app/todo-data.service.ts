import {Injectable} from '@angular/core';
import {Todo} from './todo';
import { DbService } from './db.service';

import { Http, Response }from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoDataService {
  private todoUrl = 'http://localhost:8080/todos';  // URL to web API


  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
  dbService: any;
  constructor(dbService: DbService , private http: Http) {
    this.dbService = dbService;
  }


  // Simulate ADD /todos
  addTodo(todo: Todo): TodoDataService {
    this.dbService.insert(todo)
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(todo: Todo): TodoDataService {
    return this.dbService.delete(todo);
  }


  // Toggle todo check
  toggleTodoComplete(todo: Todo): TodoDataService{
     this.dbService.check(todo);
     return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.http.get(this.todoUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    // return this.dbService.getAll();
  }

  private extractData(res: Response) {
   let body = res.json();
   return body || { };
 }
 private handleError (error: Response | any) {
   // In a real world app, we might use a remote logging infrastructure
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   console.error(errMsg);
   return Observable.throw(errMsg);
 }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // // Toggle todo complete
  // toggleTodoComplete(todo: Todo){
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

}
