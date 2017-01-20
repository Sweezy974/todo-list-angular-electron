import {Injectable} from '@angular/core';
import {Todo} from './todo';
import { DbService } from './db.service';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
  dbService: any;
  constructor(dbService: DbService) {
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
  getAllTodos(): Todo[] {
    return this.dbService.getAll();
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
