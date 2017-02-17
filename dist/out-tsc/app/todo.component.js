var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
var AppComponent = (function () {
    function AppComponent(TodoDataService) {
        this.TodoDataService = TodoDataService;
        this.todoTitle = 'Create your own todo list !';
    }
    AppComponent.prototype.getAllTodos = function () {
        var _this = this;
        this.TodoDataService.getAllTodos()
            .subscribe(function (todos) { return _this.todos = todos; }, function (error) { return _this.errorMessage = error; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        template: '<todo-form></todo-form>',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [TodoDataService]
    }),
    __metadata("design:paramtypes", [TodoDataService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/todo.component.js.map