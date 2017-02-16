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
import * as Datastore from 'mysql';
var DbService = (function () {
    function DbService() {
        this.db = new Datastore(({ filename: 'src/app/database/todo.db', autoload: true }));
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
    return DbService;
}());
DbService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], DbService);
export { DbService };
//# sourceMappingURL=../../../src/app/db.service.js.map