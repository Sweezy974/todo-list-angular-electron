import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<todo-form></todo-form>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
  todoTitle = 'Create your own todo list !';
}
