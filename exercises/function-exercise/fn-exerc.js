// function sum (a, b) {
//     return a + b;
// }

// console.log(sum(2, 8));

// function compare (a, b, c) {
//     if ((a > b) && (a > c)) {
//         return a;
//     } else if ((b > a) && (b > c)) {
//         return b;
//     } else if ((c > b) && (c > a)) {
//         return c;
//     }
// }

// console.log(compare(7, 5, 3));
// Or I could use Math.max for the above fn


// function evenOdd (a) {
//     if (a % 2 === 0) {
//         return "The number is even";
//     } else {
//         return "The number is odd";
//     }
// }

// console.log(evenOdd(187));

// var connect = function (word) {
//     if (word.length <= 20) {
//         return word.concat(word);
//     } else {
//         return word.substr(0, word.length / 2);
//     }
// }

// console.log(connect("This monster is very dangerous when it eats cakes"));


// OPTIONAL

// function quadrEq (a, b, c) {
//     var varResult1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     var varResult2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
//     var arrRes = [varResult1, varResult2];
//     return arrRes;
// }
// var resultVar = quadrEq(1, 1, -2);
// console.log(resultVar);


// var findMaxCount = function (wordStr) {
//     var maxCount = 0, maxLetter = '';
//     var arrFromStr = wordStr.split('');
//     arrFromStr.forEach(function(letter) {
//         if (wordStr.split(letter).length > maxCount) {
//             maxCount = wordStr.split(letter).length;
//             maxLetter = letter;
//         }
//     });
//     return maxLetter;
// };

// console.log(findMaxCount("albphbcccccvcccvcccvcabebticabl"));


// FIBONACCI

function fibonacci(n){
    var a = 1, b = 0, temp, arrFib = [];
  
    while (n >= 0){
      temp = a;
      a = a + b;
      b = temp;
      arrFib.push(temp);
      n--;
    }

    function sumArr (c, d) {
        return c + d;
    }
    var finArr = arrFib.reduce(sumArr, 0);
    return arrFib + "; Sum of Numbers on the Left  = " + finArr;
  }


console.log(fibonacci(10));