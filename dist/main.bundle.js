webpackJsonp([0,3],{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nedb__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nedb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nedb__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DbService = (function () {
    function DbService() {
        this.db = new __WEBPACK_IMPORTED_MODULE_1_nedb__(({ filename: 'src/app/database/todo.db', autoload: true }));
    }
    DbService.prototype.insert = function (data) {
        this.db.insert(data, function (err, newData) {
            if (data == null) {
                alert('input is empty');
            }
            if (err)
                throw err;
            return newData;
        });
    };
    DbService.prototype.delete = function (data) {
        this.db.remove(data, {}, function (err, numRemoved) {
            if (err)
                throw err;
            return numRemoved;
        });
    };
    DbService.prototype.check = function (data) {
        if (data.complete == false) {
            data.complete = true;
        }
        else {
            data.complete = false;
        }
        this.db.update({ _id: data._id }, { $set: { _complete: data._complete } }, function (err, numReplaced) {
            err ? console.error(err) : numReplaced;
        });
    };
    DbService.prototype.getAll = function () {
        return this.db.getAllData();
    };
    DbService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], DbService);
    return DbService;
}());
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/db.service.js.map

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db_service__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDataService = (function () {
    function TodoDataService(dbService) {
        // Placeholder for last id so we can simulate
        // automatic incrementing of id's
        this.lastId = 0;
        // Placeholder for todo's
        this.todos = [];
        this.dbService = dbService;
    }
    // Simulate ADD /todos
    TodoDataService.prototype.addTodo = function (todo) {
        this.dbService.insert(todo);
        return this;
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (todo) {
        return this.dbService.delete(todo);
    };
    // Toggle todo check
    TodoDataService.prototype.toggleTodoComplete = function (todo) {
        this.dbService.check(todo);
        return this;
    };
    // Simulate PUT /todos/:id
    TodoDataService.prototype.updateTodoById = function (id, values) {
        if (values === void 0) { values = {}; }
        var todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    };
    // Simulate GET /todos
    TodoDataService.prototype.getAllTodos = function () {
        return this.dbService.getAll();
    };
    // Simulate GET /todos/:id
    TodoDataService.prototype.getTodoById = function (id) {
        return this.todos
            .filter(function (todo) { return todo.id === id; })
            .pop();
    };
    TodoDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__db_service__["a" /* DbService */]) === 'function' && _a) || Object])
    ], TodoDataService);
    return TodoDataService;
    var _a;
}());
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/todo-data.service.js.map

/***/ },

/***/ 349:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 349;


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(460);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/main.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo_data_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]();
    }
    AppComponent.prototype.addTodo = function () {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new __WEBPACK_IMPORTED_MODULE_1__todo__["a" /* Todo */]();
    };
    AppComponent.prototype.toggleTodoComplete = function (todo) {
        this.todoDataService.toggleTodoComplete(todo);
    };
    AppComponent.prototype.removeTodo = function (todo) {
        this.todoDataService.deleteTodoById(todo);
    };
    Object.defineProperty(AppComponent.prototype, "todos", {
        get: function () {
            return this.todoDataService.getAllTodos();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(629),
            styles: [__webpack_require__(628)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__todo_data_service__["a" /* TodoDataService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__todo_data_service__["a" /* TodoDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__todo_data_service__["a" /* TodoDataService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/app.component.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todo_form_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_data_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__db_service__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__todo_form_component__["a" /* TodoFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__todo_data_service__["a" /* TodoDataService */], __WEBPACK_IMPORTED_MODULE_7__db_service__["a" /* DbService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/app.module.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TodoFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoFormComponent = (function () {
    function TodoFormComponent() {
        this.TodoList = [];
    }
    TodoFormComponent.prototype.onsubmit = function (e) {
        // event.preventDefault();
        this.TodoList.push(this.newTodo);
        this.newTodo = '';
    };
    TodoFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'todo-form',
            template: __webpack_require__(630)
        }), 
        __metadata('design:paramtypes', [])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/todo-form.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Todo; });
// dans cette classe on dit que chaque Todo aura aux moins 3 propriétés 
// un id un titre et complete qui determine si le todo est complété ou non
var Todo = (function () {
    // facilite l'instanciation pas obliger de parametrer tous les champs dans le constructor
    function Todo(values) {
        if (values === void 0) { values = {}; }
        this.title = '';
        this.complete = false;
        Object.assign(this, values);
    }
    return Todo;
}());
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/todo.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/environment.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Users/Swz Art/Documents/SIMPLON/angularJS/projet/src/polyfills.js.map

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "<section class=\"todoapp\">\n  <header class=\"header\">\n    <div class=\"row\">\n      <div class=\"col s12 center\">\n        <h1>Todo List</h1>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12 center\">\n        <p class=\"footer\" *ngIf=\"todos.length > 0\">\n          <span class=\"todo-count\"><strong>{{todos.length}}</strong> {{todos.length == 1 ? 'item' : 'items'}} left</span>\n        </p>\n      </div>\n\n    </div>\n    <div class=\"row\">\n      <div class=\"col offset-s3 s6  center\">\n        <input class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus=\"\" [(ngModel)]=\"newTodo.title\" (keyup.enter)=\"addTodo()\">\n        <a placeholder=\"create\" type=\"submit\" class=\"waves-effect waves-light btn\" (click)=\"addTodo()\">create</a>\n      </div>\n    </div>\n  </header>\n  <style>\n\n  .under:hover{\n    background-color: rgba(211, 211, 211, 0.22);\n  }\n\n  </style>\n<section class=\"main\" *ngIf=\"todos.length > 0\">\n  <ul class=\"todo-list\" >\n    <li *ngFor=\"let todo of todos\" [class.completed]=\"todo.complete\">\n      <div class=\"row\">\n        <div class=\"view col offset-s3 s6 under\">\n\n          <div class=\"col s10 align-left \">\n\n            <input id=\"{{todo.title}}\" class=\"toggle\" type=\"checkbox\" (click)=\"toggleTodoComplete(todo)\" [checked]=\"todo.complete\">\n            <label for=\"{{todo.title}}\">{{todo.title}}</label>\n\n\n          </div>\n          <div class=\"col s2 center\">\n            <a title=\"delete ?\"class=\"destroy  \" (click)=\"removeTodo(todo)\"><i class=\"small material-icons\" style=\"color:red;\">close</i></a>\n          </div>\n\n</div>\n</div>\n</li>\n\n</ul>\n</section>\n\n</section>"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>{{todoTitle}}</h1>\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\"  class=\"form-control\" id=\"name\"\r\n       required\r\n       [(ngModel)]=\"model.name\" name=\"name\">\r\n  TODO: remove this: {{model.name}}\r\n\r\n      </div>\r\n<!--\r\n      <div class=\"form-group\">\r\n        <label for=\"alterEgo\">Alter Ego</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"alterEgo\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n  <label for=\"power\">Hero Power</label>\r\n  <select class=\"form-control\" id=\"power\" required>\r\n    <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\r\n  </select>\r\n</div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>-->\r\n    </form>\r\n</div>"

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(350);


/***/ }

},[645]);
//# sourceMappingURL=main.bundle.map