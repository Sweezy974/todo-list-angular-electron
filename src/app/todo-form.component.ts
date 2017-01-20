import { Component } from '@angular/core';
import { Todo }    from './todo';
@Component({
  moduleId: module.id,
  selector: 'todo-form',
  templateUrl: 'todo-form.component.html'
})
// export class TodoFormComponent {
//    model = new Todo(18, 'Dr IQ');
//   submitted = false;
// onSubmit() { this.submitted = true; }

// newTodo(){
//   this.model = new Todo(42, '');
// }


// }

export class TodoFormComponent{
  newTodo: string;
  TodoList: any;

  constructor(){
    this.TodoList = [];
  }

  onsubmit(e){
    // event.preventDefault();
    this.TodoList.push(this.newTodo);
    this.newTodo = '';
  }
}
