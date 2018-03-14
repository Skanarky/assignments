// callback fn-s (helpers) below

function doubleNo (a) {
    var newDouble = a * 2;
    return newDouble;
}

function fnToString (inpNumb) {
    var numToStr = inpNumb.toString();
    return numToStr;
}


function fnCapital (inpStr) {
    var toLowCaseStr = inpStr.toLowerCase();
    var newStrFromInp = toLowCaseStr.charAt(0).toUpperCase() + toLowCaseStr.slice(1);
    return newStrFromInp;
}

function printNameOnly (objectInp) {
    return objectInp.name;
}

function printNameAndCanGoNot (objectInp) {
    if (objectInp.age < 18) {
        return `${objectInp.name} is under age!!!`;    
    } else if (objectInp.age >= 18) {
        return `${objectInp.name} can go to The Matrix.`;
    }
}

function printHOneHtwo (objectInp) {
    return `<h1>${objectInp.name}</h1><h2>${objectInp.age}</h2>`;
}

// higher order fn below:

function arrMapFunction (inpArr, callbackFn) {
    var newArr = inpArr.map(callbackFn);
    return newArr;
}

// console.log(arrMapFunction([2, 5, 100], doubleNo));
// console.log(arrMapFunction([2, 5, 100], fnToString));
// console.log(arrMapFunction(["john", "JACOB", "jinGleHeimer", "schmidt"], fnCapital));
// console.log(arrMapFunction([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ], printNameOnly));

// console.log(arrMapFunction([  
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ], printNameAndCanGoNot));

console.log(arrMapFunction([  
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
], printHOneHtwo));