import { Injectable } from '@angular/core';
import * as Datastore from 'nedb';

@Injectable()

export class DbService {
    public db: any;
    constructor() {
        this.db = new Datastore(({ filename: 'src/app/database/todo.db', autoload: true }));
    }

    public insert(data: any) {
        this.db.insert(data, (err: any, newData: any) => {
            if(data== null){
                alert('input is empty');
            }
            if (err) throw err;
            return newData;
        })
    }

    public delete(data:any) {
        this.db.remove(data, {}, function (err, numRemoved){
            if(err) throw err;
            return numRemoved
        })
    }

    public check(data: any){
        if(data.complete == false ){
            data.complete = true
        }

        else{
            data.complete = false
        }
        this.db.update({ _id: data._id}, {$set: { _complete:data._complete}},(err:any,numReplaced:any) => {
        err ? console.error(err) :numReplaced;
        });
    }
 



    public getAll() {
        return this.db.getAllData();
    }
}