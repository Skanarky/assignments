// 1

// var strEx = "really funny";
// var logEachStr = function (str) {
//     for ( var i = 0; i < str.length; i++) {
//         console.log(str.charAt(i));
//     }
// };

// logEachStr(strEx);

// 2.1

var strEx = "really #funny";

var findCharInStr = function (str, findChar) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === findChar) {
            return str.indexOf(findChar);
        }
    }
    return "Character not found!";
};

console.log(findCharInStr(strEx, "&"));

// 2.2

// var strEx = "really #funny";

// var findCharInStr = function (str, findChar) {
//     var newSol = "";
//     var negativeAnsw = "Character not found!";
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === findChar) {
//             newSol = str.indexOf(findChar);
//             return newSol;
//         }
//     }
//     return negativeAnsw;
// };

// console.log(findCharInStr(strEx, "8"));

// 2.3

// var strEx = "really funny";

// var findCharInStr = function (str, findChar) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === findChar) {
//             count++;
//         }
//     }
//     if (count > 0) {
//         return str.indexOf(findChar);
//     } else {
//         return "Character not found!";
//     }
// };

// console.log(findCharInStr(strEx, "8"));

// 3.1

// var arrEx = [1, 4, 54, 3, 42];

// var findFortyTwo = function (arrInput) {
//     for (var i = 0; i < arrInput.length; i++) {
//         if (arrInput[i] === 42) {
//             // console.log("Found 42")
//             return;
//         }
//     }
//     console.log("42 not found!");
// };

// findFortyTwo(arrEx);

// 3.2

// var arrEx = [1, 4, 54, 3, 42, 42];

// var findFortyTwo = function (arrInput) {
//     var count = 0;
//     for (var i = 0; i < arrInput.length; i++) {
//         if (arrInput[i] === 42) {
//             count++;
//         }
//     }
//     if (count > 0) {
//         return "Found 42";
//     } else {
//         return "42 not found!";
//     }
// };

// console.log(findFortyTwo(arrEx));

// 4

// var arrEx = [4, 54, 3, 42, 6, 42, 5, 90, 2, 22, 99, 53, 87];

// var findSmall = function (arrInput) {
//     var arrExSmall = arrEx[0];
//     for (var i = 0; i < arrInput.length; i++) {
//         if (arrInput[i] < arrExSmall) {
//             arrExSmall = arrInput[i];
//         }
//     }
//     return arrExSmall;
// }

// console.log(findSmall(arrEx));