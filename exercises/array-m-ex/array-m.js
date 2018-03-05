var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// function remLast (arrInput) {
//     arrInput.pop();
//     return arrInput;
// }

// console.log(remLast(vegetables));  

// function remFirst (arrInput) {
//     arrInput.shift();
//     return arrInput;
// }

// console.log(remFirst(fruit)); 

// function findInd (arrInput, word) {
//     return arrInput.indexOf(word);
// }
// console.log(findInd(fruit, "orange"));

// function addEnd (arrInput) {
//     arrInput.push(findInd(fruit, "orange"));
//     return arrInput;
// }

// console.log(addEnd(fruit));

// function findLength (arrInput) {
//     return arrInput.length;
// }
// console.log(findLength(vegetables));

// function addEnd (arrInput) {
//     arrInput.push(findLength(vegetables));
//     return arrInput;
// }

// console.log(addEnd(vegetables));

function connect (arrInput1, arrInput2) {
    return arrInput1.concat(arrInput2);
}

var newArrMix = connect(fruit, vegetables);

// console.log(newArrMix);

function remTwo (arrInput) {
    arrInput.splice(3, 2);
    return arrInput;
}

// console.log(remTwo(newArrMix));

function revArr (arrInput) {
    return arrInput.reverse(remTwo(newArrMix));
}

// console.log(revArr(newArrMix));

function joinThatArray (arrInput) {
    return arrInput.join(", ");
}
console.log(joinThatArray(newArrMix));