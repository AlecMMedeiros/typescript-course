"use strict";
function sum(n1, n2) {
    return n1 + n1;
}
function printResulSum(num) {
    console.log("Result is " + num);
}
printResulSum(sum(2, 4));
let sumValues;
sumValues = sum;
console.log(sumValues(2, 5));
function sumAndHadle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
sumAndHadle(2, 80, (result) => console.log(result));
