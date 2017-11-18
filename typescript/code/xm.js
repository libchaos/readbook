"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
const person = new person_1.Person('hello', 123);
console.log(person.age);
function te(person) {
    console.log(person.name, person.grade);
}
function logOnReturen(thing) {
    console.log(thing);
    return thing;
}
let stringLog = logOnReturen('string log');
let numberLog = logOnReturen(1231);
let newBook = { title: 'this is a book' };
let bookLog = logOnReturen(newBook);
class Shelf {
    constructor() {
        this._items = new Array();
    }
    add(item) {
        this._items.push(item);
    }
    printTitles() {
        this._items.forEach(item => console.log(item.title));
    }
}
