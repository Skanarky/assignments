// "... software development is “the act of breaking a complex problem down into smaller problems, and composing simple solutions to 
// form a complete solution to the complex problem.”

// all software is composed
// composed by building blocks
// building blocks - functions and objects (+ data types and structures)

// FN COMPOSITION

const g = n => n + 1;
const f = n => n * 2;

// basic composition 
const composedFn = x => {
  const afterG = g(x);
  const afterF = f(afterG);

  return afterF;
};

// vvv maybe btter, harder to debug vvv
const composedFnBetter = x => f(g(x));

console.log(composedFn(5));
console.log(composedFnBetter(5));

// promise chain composition
Promise.resolve(5)
  .then(g)
  .then(f)
  .then(value => console.log(value))
;

// --> 12
// --> 12

// OBJECT COMPOSITION

// “Favor object composition over class inheritance” the Gang of Four, 
// book “Design Patterns: Elements of Reusable Object Oriented Software”

// “In computer science, a composite data type or compound data type is any
// data type which can be constructed in a program using the programming
// language’s primitive data types and other composite types. […] The act of
// constructing a composite type is known as composition.” ~ Wikipedia

// primitive
const firstName = 'Claude';
const lastName = 'Debussy';

// composite/compound
const fullName = {
    firstName,
    lastName
};

// inheritance obj comp
class Foo {
    constructor () {
      this.a = 'a prop'
    }
}
class Bar extends Foo {
    constructor (options) {
        super(options);
        this.b = 'b prop'
    }
}
const myBar = new Bar(); // { a: 'a prop', b: 'b prop' }
console.log(myBar);

// mixin composition
// >>> warning for deep clone, can be avoid with deep clone - see further down

const a = {
    a: 'a prop'
  };
const b = {
    b: 'b prop'
};
const c = {
    c: { d: 0 }
};

const d = { ...a, ...b , ...c };

console.log(d);
c.c.d = 3;
console.log(c);
console.log(d);

// clone (shallow)
// >>> warning for deep clone, can be avoid with deep clone - see further down

// const returnedTargetChangesAAsWell = Object.assign(a, b);
const returnedTarget = Object.assign({}, a, b, c);

// console.log(a);
// console.log(b);
// console.log(c);
console.log(returnedTarget);
// returnedTarget.c.d = 3;
c.c.d = 5;
console.log(c);
console.log(returnedTarget);
console.log(d);

// deep clone
// returnedTarget2.c.d WON'T change

const returnedTarget2 = JSON.parse(JSON.stringify(returnedTarget));

console.log(returnedTarget);
console.log(returnedTarget2);
c.c.d = 7;
console.log(returnedTarget);
console.log(returnedTarget2);
