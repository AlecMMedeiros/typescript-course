"use strict";
const names = [];
const promise = new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve("Hey Timeout!");
    }, 2000);
});
promise.then((data) => {
    data.split(" ");
});
function mergeObject(objA, objB) {
    return Object.assign(objA, objB);
}
const merge = mergeObject({ name: "Alec", hobbies: ["Code"] }, { age: 87 });
console.log(merge.name);
console.log(merge.hobbies);
console.log(merge.age);
function countAndDescribe(element) {
    let text = "Got no value";
    if (element.length === 1) {
        text = "Got 1 element";
    }
    else if (element.length > 1) {
        text = "Got " + element.length + " elements";
    }
    return [element, text];
}
console.log(countAndDescribe("House"));
function extractObjectKey(Obj, key) {
    return "The value is: " + Obj[key];
}
console.log(extractObjectKey({ name: "Alec" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Alec");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(10);
console.log(numberStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const namesList = ['Alec', 'Andrea'];
