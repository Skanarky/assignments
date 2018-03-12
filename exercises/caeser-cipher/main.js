// MY PSEUDO C

// get array/string with the alphabet

// have a test string

// fn to receive one param as a STRING and one number (the encrypting parameter)
    //   Set an empty array (OR string; IN THE fn action below just do, when pushing, newStr += ...);
    //  MAYBE NOT ???fn will receive str and store it as an new arr;
    //   Loop trough new arr (OR string input) and do action: get each character of it and replace 
    //it with another char from the ALPHABET string, COUNTING with the INPUT number (input No. 2)
    //push these new char into the array from line one of this fn;
    // (!!!make sure in the action above to ACCOUNT FOR THE SPACES and other CHAR-s - they probably will stay THE SAME?!)
    //   return the new array, but join("") it to a string

// MY PSEUDO C ends here

//From ex text: 
// You only have to shift letters that are part of the 26-letter alphabet. Any other characters 
// (such as spaces) should be printed as they were received. The shift value will always
// be on the interval [0, 26].

var ask = require("readline-sync");  
var userInputPhrase = ask.question("What phrase would you like to encrypt? ").toLowerCase();  
var userShiftInput = parseInt(ask.question("How many letters would you like to shift? "));
console.log(`To encrypt: '${userInputPhrase}', with encryption key-value: ${userShiftInput}.`)






// Fn, finding a char from arr, str, etc.
// var arrExTwo = ["#jkjk*3", "C%*4!", "$$fad223@(#&$", "Heydaff0!", "$$fad223@(#*&$", "dafdf%64$%^", "%*$rty$%)9]{"];

// var findArrWithChar = function (arrInpTwo, charInp) {
//     var arrNew = [];
//     for (var i = 0; i < arrInpTwo.length; i++) {
//         for (var j = 0; j < arrInpTwo[i].length; j++) {
//             if (arrInpTwo[i][j] === charInp) {
//                 arrNew.push(arrInpTwo[i]);
//             }
//         }
//     }
//     return arrNew;
// }

// console.log(findArrWithChar(arrExTwo, "*"));