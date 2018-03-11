var ask = require("readline-sync");

// prompts
    //get number
    // var num1 = ask.question("Pick a whole number?");

//get another number
    // var num2 = ask.question("Pick another whole number?");

//choose operation/function

// chooser fn
// pick numbers and operators


// selects which fn to use and call it by choosing the number as arguments

// create fn-s for the 4 operations: + - / * arithmetic fn-s

var num1 = ask.question("Pick a whole number?");
var num2 = ask.question("Pick another whole number?");
var operations = ["+", "-", "*", "/"];
var indexFrom = ask.keyInSelect(operations, "Choose an operation to perform");

if (operations[indexFrom] === "+") {
    console.log(add(Number(num1), Number(num2)));
} else if (operations[indexFrom] === "-") {
    console.log(subtr(num1, num2));
} else if (operations[indexFrom] === "*") {
    console.log(mult(num1, num2));
} else if (operations[indexFrom] === "/") {
    console.log(divi(num1, num2));
}   else {
    console.log("Thanks For Trying Our Calculator!\nBye!");
}

function add (a, b) {
    return a + b;
}

function subtr (a, b) {
    return a - b;
}

function mult (a, b) {
    return a * b;
}

function divi (a, b) {
    return a / b;
}