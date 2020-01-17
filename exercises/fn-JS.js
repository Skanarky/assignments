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
// console.log(add10To); // -> [Fuction]

// 6. closure -> a function’s scope that is kept alive by a reference to that function

function printNames(str1) {
    const type1 = 'First: ';
    return (str2) => {
        const type2 = 'Middle: ';
        return (str3) => {
            const type3 = 'Last: ';
            return type1 + str1 + ', ' + type2 + str2 + ', ' + type3 + str3;
        }
    };
}

const firstNameToMiddle = printNames('ILIAN');
const middleNameToLast = firstNameToMiddle('MILENOV');
const lastNameToAll = middleNameToLast('KUTKUROV');

console.log(lastNameToAll);
// console.log(firstNameToMiddle); // -> [Fuction]
// console.log(middleNameToLast); // -> [Fuction]
console.log(middleNameToLast('KUTKUROV'));

// 7. function composition - functions as building blocks

function addAValTo5(val) {
    return val + 5;
}

function multAValBy5(val) {
    return val * 5;
}

// then we can compose / create ->
function addAValTo5AndMultBy5(val) {
    return multAValBy5(addAValTo5(val));
}

console.log(addAValTo5AndMultBy5(5));

// 8. point-free notation - in point 7. above 'val' is specified twice (in parameter and when used)
// when point free no need to specify it at all - supposedly easier to read and reason (less verbose), and
// no need to come up with names for those variables since we don't specify them

// 9. currying - a curried function is a function that only takes a single parameter at a time.
// ! using example in point 7. but make it more flexible

// two very simple fns that do one think only vvv
// replace addValTo5 with just add fn
// function addAValToVal(val) {
//     return (val2) => val + val2;
// }
const addAValToVal = (val) => (val2) => val + val2;

// replace multAValBy5 with just mult fn
// function multAValByVal(val) {
//     return (val2) => val * val2;
// }
const multAValByVal = (val) => (val2) => val * val2;

// this vvv function can be point free notated and
// we always pass only one parameter at a time (reusable, composable, ...)
// function addValToValAndMultByVal(val) {
//     return (val2) => (val3) => multAValByVal(val3)(addAValToVal(val)(val2));
// }
const addValToValAndMultByVal = (val1) => (val2) => (val3) => multAValByVal(val3)(addAValToVal(val1)(val2));

console.log(addValToValAndMultByVal(5)(3)(9));

// this ^^^ can be broken down like this vvv (passing one param at a time)

const initNum5ToAddTo = addValToValAndMultByVal(5);

const val8ToMultBy = initNum5ToAddTo(3);
const val11ToMultBy = initNum5ToAddTo(6);

const multBy9AndFinalResult72 = val8ToMultBy(9);
const multBy9AndFinalResult99 = val11ToMultBy(9);

console.log(multBy9AndFinalResult72);
console.log(multBy9AndFinalResult99);

// or with passing functions as params vvv
// one param at a time
const composedMultByValAndAddValToVal = (fn1) => (fn2) => (val1) => fn1(fn2(val1));
console.log('curr 1: ', composedMultByValAndAddValToVal(multAValByVal(9))(addAValToVal(5))(3));

const composedMultAndThenAddFnsForValbyVal = fn1 => val1 => fn2 => val2 => val3 => fn1(val1)(fn2(val2)(val3));
console.log('curr 2: ', composedMultAndThenAddFnsForValbyVal(multAValByVal)(9)(addAValToVal)(5)(3));

// two then one param
const composeFn = (fn1, fn2) => x => fn1(fn2(x));
console.log(composeFn(multAValByVal(9), addAValToVal(5))(3));

// !
// in order to reuse - more static params should go at the beginning, and params most likely to cahnge at the end
// parameter order is important to fully leverage currying.
// !

// 10. .filter, .map, .reduce ...

// 11. referential transparency <=> reverse refactoring
// a pure function can safely be replaced by its expression

// 12. execution order
// two things must be true for independence and possible better performace and to take advantage of modern multi core platforms
// first, functions must be pure; this is important because they must not be affected by the execution of the other / eachother
// second, the output of one function is not used as the input of the other

// * some libs:
// Immutable.js
// Ramda (currying, point-free notation, etc.)
