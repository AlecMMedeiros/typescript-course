"use strict";
let userInput;
let userName;
userName = "John";
userInput = 10;
userInput = "Anna";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
