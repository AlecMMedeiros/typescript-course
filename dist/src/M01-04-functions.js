"use strict";
// function sum(n1: number, n2: number): number { - Explicit return type 'number'
//   return n1 + n1;
// }
function sum(n1, n2) {
    // inferred return type 'number'
    return n1 + n1;
}
// function printResulSumt(num: number) {
//   // inferred 'void' return...I mean, void means that the function doesn't has a return.
//   console.log("Result is " + num);
// }
function printResulSum(num) {
    // explicit 'void' return...I mean...you know...
    console.log("Result is " + num);
}
printResulSum(sum(2, 4));
/// Now i want to assign the 'sum' function to a variable.
// let sumValues = sum;
// sumValues = 5; -- The problem is that you still can reassign any type of value to the variable.
// let sumValues: Function; -- Now, we can assure that we can only assign a function to the variable;
// sumValues = sum; -- Good!
// sumValues = printResulSum; -- Oh,... any function...
let sumValues; // Well, now we are saying: Hey, only accept function that receives 2 numbers as params and return a number;
sumValues = sum;
// sumValues = printResulSum; Typescript will not compile cause printResultSum doen't fit the type of function.
console.log(sumValues(2, 5));
// Callback types;
function sumAndHadle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
sumAndHadle(2, 80, (result) => console.log(result));
