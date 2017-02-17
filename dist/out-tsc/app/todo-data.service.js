var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var TodoDataService = (function () {
    function TodoDataService(dbService, http) {
        this.http = http;
        this.todoUrl = 'http://localhost:8080/todos';
        this.lastId = 0;
        this.todos = [];
        this.dbService = dbService;
    }
    TodoDataService.prototype.addTodo = function (todo) {
        this.dbService.insert(todo);
        return this;
    };
    TodoDataService.prototype.deleteTodoById = function (todo) {
        return this.dbService.delete(todo);
    };
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        this.dbService.check(todo);
        return this;
    };
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    TodoDataService.prototype.getAllTodos = function () {
        return this.http.get(this.todoUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TodoDataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    TodoDataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    return TodoDataService;
}());
TodoDataService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [DbService, Http])
], TodoDataService);
export { TodoDataService };
//# sourceMappingURL=../../../src/app/todo-data.service.js.map