// "... software development is “the act of breaking a complex problem down into smaller problems, and composing simple solutions to 
// form a complete solution to the complex problem.”

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
// --> 12