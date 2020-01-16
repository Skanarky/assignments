'use strict';

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

// 2. immutability - nobody or nothing can change state
// see also library Immutable.js

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

console.log(tenPlusParams(0, 0));
console.log(a);
console.log(tenPlusParams(1, 0));
console.log(tenPlusParams(1, 2));

// 3. use recusions instead of looping - part of 2. above
// !!! Recusrion may be expensive tho!

// loop construct
let acc = 0;
for (var i = 1; i <= 10; ++i) {
    acc += i;
}
console.log(acc);
// without loop construct or !!!variables
function sumRange(start, end, acc) {
    if (start > end)
        return acc;
    return sumRange(start + 1, end, acc + start)
}
console.log(sumRange(1, 10, 0)); // prints 55

// 4. refactoring

function validateSsn(ssn) {
    if (/^\d{3}-\d{2}-\d{4}$/.exec(ssn))
        console.log('Valid SSN');
    else
        console.log('Invalid SSN');
}
function validatePhone(phone) {
    if (/^\(\d{3}\)\d{3}-\d{4}$/.exec(phone))
        console.log('Valid Phone Number');
    else
        console.log('Invalid Phone Number');
}

validateSsn('123-123-123');
validateSsn('123-12-1234');

function validSmthg(val, expr, type) {
    if (expr.exec(val))
        console.log(`Valid ${type}`);
    else
        console.log(`Invalid ${type}`);
}

validSmthg('(123)123-12', /^\(\d{3}\)\d{3}-\d{4}$/, 'Phone');
validSmthg('(123)123-1234', /^\(\d{3}\)\d{3}-\d{4}$/, 'Phone');

// 5. refactoring and higher order fn-s

const phNo = /^\(\d{3}\)\d{3}-\d{4}$/.exec.bind(/^\(\d{3}\)\d{3}-\d{4}$/);
const ssNo = /^\d{3}-\d{2}-\d{4}$/.exec.bind(/^\d{3}-\d{2}-\d{4}$/);
const isStr = (val) => typeof val === 'string';

function validSmthgHigherOrder(val, checkFn, type) {
    if (checkFn(val))
        console.log(`Valid ${type}`);
    else
        console.log(`Invalid ${type}`);
}

validSmthgHigherOrder('123-12-1234', ssNo, 'SSN');
validSmthgHigherOrder('(123)123-1234', phNo, 'Phone');
validSmthgHigherOrder('bla bla', isStr, 'String');
validSmthgHigherOrder(123456, isStr, 'String');

function makeAdder(initVal) {
    return (secVal) => initVal + secVal;
}

const add10To = makeAdder(10);
const add5To = makeAdder(5);
// with some currying
const add10To20 = makeAdder(10)(20);
const add5To20 = makeAdder(5)(20);

console.log(add10To(20));
console.log(add5To(20));
console.log(add10To20);
console.log(add5To20);

console.log(add10To); // -> [Fuction]