// var arrEx = [7, 99, 4, 54, 3, 42];

// var findBig = function (arrInp) {
//     var arrBig = arrInp[0];
//     for (var i = 0; i < arrInp.length; i++) {
//         if (arrInp[i] > arrBig) {
//             arrBig = arrInp[i];
//         }
//     }
//     return arrBig;
// }

// console.log(findBig(arrEx));

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

var isDevis = function (a, b) {
    var resDiv = (a % b === 0);
    if (resDiv) {
        return `${a} is divisible by ${b}`; 
    } else {
        return `${a} is not divisible by ${b}`;
    }
}

console.log(isDevis(20, 5))