"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1;
let user2;
user1 = {
    name: "Alec",
    age: 46,
};
user2 = {
    name: "Alec",
    age: 46,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
user2.greet('Wellcome');
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}!`);
    }
}
let Employee1;
Employee1 = new Employee('Sara', 30);
console.log(Employee1);
Employee1.greet('Hello');
let sumFunction;
sumFunction = (n1, n2) => {
    return n1 + n2;
};
