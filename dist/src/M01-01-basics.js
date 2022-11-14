"use strict";
function combine(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(`${phrase} ${n1 + n2}`);
    }
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is :";
combine(number1, number2, printResult, resultPhrase);
