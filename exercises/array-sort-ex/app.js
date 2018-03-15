// callback fn-s (helpers) below

function checkBigger (a, b) {
    return a > b;
}

function checkSmaller (a, b) {
    return a < b;
}

function strShortToLong (inpStrOne, inpStrTwo) {
    return inpStrOne.length > inpStrTwo.length;
}

function alphabetical (inpStrOne, inpStrTwo) {
    return inpStrOne.charAt(0).charCodeAt() > inpStrTwo.charAt(0).charCodeAt();
}

function getByAge (inpObjPropOne, inpObjPropTwo) {
    return inpObjPropOne.age > inpObjPropTwo.age;
}

// higher order fn below:

function arrSortFunction (inpArr, callbackFn) {
    var newArr = inpArr.sort(callbackFn);
    return newArr;
}

// console.log(arrSortFunction([1, 3, 5, 2, 90, 20], checkBigger));
// console.log(arrSortFunction([1, 3, 5, 2, 90, 20], checkSmaller));
// console.log(arrSortFunction(["dog", "wolf", "by", "family", "eaten"], strShortToLong));
// console.log(arrSortFunction(["dog", "wolf", "by", "family", "eaten"], alphabetical));
console.log(arrSortFunction([  
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
], getByAge));