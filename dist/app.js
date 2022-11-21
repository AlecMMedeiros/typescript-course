"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = "Alec";
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('Logging - Person')
], Person);
const person1 = new Person();
function WithTemplate(template, hookId) {
    return (constructor) => {
        const hookelement = document.getElementById(hookId);
        const p = new constructor();
        if (hookelement) {
            hookelement.innerHTML = template;
        }
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Alec";
        console.log('Creating person object...');
    }
};
Person2 = __decorate([
    WithTemplate('<h1>Hello World</h1>', 'app-test')
], Person2);
