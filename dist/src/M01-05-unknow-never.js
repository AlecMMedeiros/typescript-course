"use strict";
// Unknow and Never types
let userInput;
let userName;
userName = "John";
userInput = 10; // The variable accepts the number...
userInput = "Anna"; // The variable accepts the string...so, it's works like 'any' type, right?
// userName = userInput; // Doesn't works, cause Typescript still understand that userInput is an 'unknown' type. So you have to check the type to make it understand that the actual value is a string.
if (typeof userInput === "string") {
    userName = userInput; // Now it will work! So 'unknow' is more restrict than 'any'.
}
function generateError(message, code) {
    // This function will never return anything, not even 'undefined'. So, it's recommend in cases like that to use 'never' type.
    throw { message: message, errorCode: code };
}
