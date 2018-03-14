// callback fn-s (helpers) below

function overFive(a) {
    var newDouble = a > 5;
    return newDouble;
}

function onlyEven(a) {
    var newDouble = a % 2 === 0;
    return newDouble;
}

function fiveCharOrLess(inpStr) {
    var newStrInp = "";
    if (inpStr.length <= 5) {
        newStrInp = inpStr;
    }
    return newStrInp;
}

function printNameOnlyInClub(objectInp) {
    if (objectInp.member === true) {
        return objectInp.name;
    }
}

function printNameAndCanGoNotFilter (objectInp) {
    if (objectInp.age < 18) {
        return objectInp.name;    
    }
}

// higher order fn below

function arrFilterFunction(inpArr, callbackFn) {
    var newArr = inpArr.filter(callbackFn);
    return newArr;
}

// console.log(arrFilterFunction([3, 6, 8, 2], overFive));
// console.log(arrFilterFunction([3, 6, 8, 2], onlyEven));
// console.log(arrFilterFunction(["dog", "wolf", "by", "family", "eaten", "camping"], fiveCharOrLess));
// console.log(arrFilterFunction([  
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ], printNameOnlyInClub));
console.log(arrFilterFunction([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
], printNameAndCanGoNotFilter));