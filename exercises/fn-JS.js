// 'use strict';

// FN Programming:
// The goal is to minimize the amount of impure 
// code and segregate it from the rest of our program

// 1. pure functions
// Pure Functions will always produce the same output given the same inputs.
// Pure functions have no side effects.

function add(x, y) {
    return x + y;
}

console.log(add(5, 2));

// 2. immutability

var x = 1;
x = x + 1; // illegal in FN programming
let y = 1;
y = y + 1; // illegal in FN programming
const z = 1;

console.log(x);
console.log(y);
try {
    z = z + 1;
} catch (err) {
    console.log('Use const for primitive datatypes to enforce immutability.');
}

const someArr = [1, 2];

try {
    console.log(someArr);
    someArr[1] = 3;
    console.log(someArr, 'const does not enforce immutability with reference data types');
} catch (err) {
    console.log(err);
}

function tenPlusParams(x, y) {
    const z = 10;
    return z + x + y;
}

var a = tenPlusParams(0, 0);
var b = tenPlusParams(1, 0);
var c = tenPlusParams(1, 2);
console.log(a);
console.log(b);
console.log(c);