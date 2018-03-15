// callback fn-s (helpers) below

function addReduce (a, b) {
    var newDouble = a + b;
    return newDouble;
}

function makeToStr (a, b) {
    var newDouble = a.toString() + b.toString();
    return newDouble;
}
//1
function countInObj (inpObjOne, currVal) {
    currVal = 0;
    if (inpObjOne.voted === true) {
        currVal++;
    }
    return currVal;
}


// higher order fn below:

function arrReduceFunction (inpArr, callbackFn) {
    var newRedData = inpArr.reduce(callbackFn);
    return newRedData;
}

// console.log(arrReduceFunction([1, 2, 3], addReduce));
// console.log(arrReduceFunction([1, 2, 3], makeToStr)); 
// OR JUST ----> to string -> .join()
// console.log([1, 2, 3].join(""));
console.log(arrReduceFunction([
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
], countInObj));