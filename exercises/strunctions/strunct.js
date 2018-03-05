var word = "AlPhAbEtIcal";
var wordTwo = "The OrDer";
var indOfArray = [wordTwo, word];

// .concat()

// var combine1 = function (inputVarStringOne, inputVarStringTwo) {
//     return inputVarStringOne.concat(" is ", inputVarStringTwo);
// }
// console.log(combine(wordTwo, word));

// var wordThree = " here is ";
// var combine2 = function (inputVarStringOne, inputVarStringTwo) {
//     return inputVarStringOne.concat(wordThree, inputVarStringTwo);
// }

// console.log(combine2(wordTwo, word));

// var combine3 = function (inputVarStringOne, inputVarStringTwo) {
//     var wordThree = " here is ";
//     var alphaArray = ["I will be UNSHIFTED"];
//     alphaArray.unshift(inputVarStringOne.concat(wordThree, inputVarStringTwo));
//     return alphaArray;
// }
// console.log(combine3(wordTwo, word));


// .indexOf()

// var locate1 = function (inputVarStringOne) {
//     return inputVarStringOne.indexOf("a");
// }
// console.log(locate1(word));

// var locate2 = function (inputVarStringOne, inputVarStringTwo) {
//     var wordThree = " here is ";
//     var alphaArray = ["I will be UNSHIFTED a"];
//     alphaArray.unshift(inputVarStringOne.concat(wordThree, inputVarStringTwo));
//     return alphaArray[1].indexOf("a");
// }
// console.log(locate2(wordTwo, word));

// var locate3 = function (inputVarStringOne, inputVarStringTwo) {
//     var wordThree = " here is ", wordFour = " long years";
//     var alphaArray = ["I will be UNSHIFTED a"];
//     alphaArray.unshift(inputVarStringOne.concat(wordThree, inputVarStringTwo));
//     return alphaArray[0].indexOf("a") + wordFour;
// }
// console.log(locate3(wordTwo, word));


// .lastindexOf()

// var locate12 = function (inputVarStringOne) {
//     return inputVarStringOne.lastIndexOf("A");
// }
// console.log(locate12(word));

// var locate22 = function (inputVarStringOne, inputVarStringTwo) {
//     var wordThree = " here is ";
//     var alphaArray = ["I will be UNSHIFTED a"];
//     alphaArray.unshift(inputVarStringOne.concat(wordThree, inputVarStringTwo));
//     return alphaArray[0].lastIndexOf("A");
// }
// console.log(locate22(wordTwo, word));

// var locate32 = function (inputVarStringOne, inputVarStringTwo) {
//     var wordThree = " here is ", wordFour = " long years";
//     var alphaArray = ["I will be UNSHIFTED a"];
//     alphaArray.unshift(inputVarStringOne.concat(wordThree, inputVarStringTwo));
//     return alphaArray[0].lastIndexOf("A") + wordFour;
// }
// console.log(locate32(wordTwo, word));


// .match()

// var match1 = function (inputVarStringOne) {
//     return inputVarStringOne.match(/a/g);
// }
// console.log(match1(word));

// var match2 = function (inputVarStringOne, inputVarStringTwo) {
//     var alphaArray = ["I will be spliced", "Me too"];
//     alphaArray.splice(0, 2, inputVarStringOne, inputVarStringTwo);
//     return alphaArray[1].match(/a/g);
// }

// console.log(match2(wordTwo, word));

// var match3 = function (inputVarStringOne, inputVarStringTwo) {
//     var alphaArray = ["I will be spliced", "Me too"];
//     alphaArray.splice(0, 2, inputVarStringOne, inputVarStringTwo);
//     return alphaArray[1].match(/a/gi);
// }

// console.log(match3(wordTwo, word));


// .replace()

// var rep1 = function (inputVarStringOne) {
//     return inputVarStringOne.replace(/a/gi, "B");
// }
// console.log(rep1(word));

// var rep2 = function (inputVarStringOne, inputVarStringTwo) {
//     var alphaArray = ["I will be spliced", "Me too"];
//     alphaArray.splice(0, 2, inputVarStringOne, inputVarStringTwo);
//     return alphaArray[0].replace(/r/g, " - REPLACING Lower R - ");
// }

// console.log(rep2(wordTwo, word));

// var rep3 = function (inputVarStringOne, inputVarStringTwo) {
//     var alphaArray = ["I will be spliced", "Me too"];
//     var anotherVar = " - REPLACING Lower AND Upper 'a' - ";
//     alphaArray.splice(0, 2, inputVarStringOne, inputVarStringTwo);
//     return alphaArray[1].replace(/a/gi, anotherVar);
// }

// console.log(rep3(wordTwo, word));


// .slice()

// var slice1 = function (inputVarStringOne) {
//     return inputVarStringOne.slice(5);
// }
// console.log(slice1(word));

// var slice2 = function () {
//     var alphaArray = ["I will be concated", "Me too"];
//     var anotherArray = ["I will concate", "Yes, me too"];
//     var andANotherArray = alphaArray.concat(anotherArray);
//     return andANotherArray[1].slice(2, 10);
// }

// console.log(slice2());


// var slice3 = function (inputVarStringOne, inputVarStringTwo) {
//     var varFromConc = inputVarStringOne.concat(" is " + inputVarStringTwo);
//     return varFromConc.slice(9);
// }

// console.log(slice3(wordTwo, word));


// .split()

// var split1 = function (inputVarStringOne) {
//     return inputVarStringOne.split("");
// }
// console.log(split1(word));

// var split2 = function (inputArray) {
//     var varFromArray = inputArray.toString();
//     return varFromArray.split(" ");
// }

// console.log(split2(indOfArray));


// var split3 = function (inputArray) {
//     var varFromArray = inputArray.toString();
//     return varFromArray.split(/a/gi);
// }

// console.log(split3(indOfArray));


// .toLowerCase()

// var lower1 = function (inputVarStringOne) {
//     return inputVarStringOne.toLowerCase();
// }
// console.log(lower1(word));

// var lower2 = function (inputArray) {
//     var varFromArray = inputArray.toString();
//     return varFromArray.toLowerCase();
// }

// console.log(lower2(indOfArray));


// var lower3 = function (inputArray, inputVarStringOne, inputVarStringTwo) {
//     var varFromArrayAndOtherStrings = inputArray.toString() + inputVarStringOne.concat(inputVarStringTwo);
//     return varFromArrayAndOtherStrings.toLowerCase();
// }

// console.log(lower3(indOfArray, wordTwo, word));


// .toUpperCase()

// var upper1 = function (inputVarStringOne) {
//     return inputVarStringOne.toUpperCase();
// }
// console.log(upper1(word));

// var upper2 = function (inputArray) {
//     var varFromArray = inputArray.toString();
//     return varFromArray.toUpperCase();
// }

// console.log(upper2(indOfArray));

// var upper3 = function (inputArray, inputVarStringOne, inputVarStringTwo) {
//     var anotherVar = " -replacing 'a' & 'A'- ";
//     var varFromArrayAndOtherStrings = inputArray.toString() + inputVarStringOne.concat(inputVarStringTwo);
//     return varFromArrayAndOtherStrings.toUpperCase().replace(/a/gi, anotherVar);
// }

// console.log(upper3(indOfArray, wordTwo, word));


// .substr()


// var subs1 = function (inputArray, inputVarStringOne, inputVarStringTwo) {
//     var anotherVar = " -replacing 'a' & 'A'- ";
//     var varFromArrayAndOtherStrings = inputArray.toString() + inputVarStringOne.concat(inputVarStringTwo);
//     return varFromArrayAndOtherStrings.toUpperCase().substr(0, 9).concat(" is important");
// }

// console.log(subs1(indOfArray, wordTwo, word));

// var subs2 = function (inputArray) {
//     var varFromArray = inputArray.toString();
//     return varFromArray.toUpperCase().substr(10);
// }

// console.log(subs2(indOfArray));

var subs3 = function (inputVarStringOne) {
    return inputVarStringOne.replace(/alphabetical/gi, "finally").toUpperCase().substr(0, 3);
}
console.log(subs3(word));