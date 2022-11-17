"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user1;
user1 = {
    name: 'Alec',
    age: 46,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
user1.greet('Wellcome');
