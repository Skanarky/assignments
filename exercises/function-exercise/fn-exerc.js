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
// Or I can use Math.max above


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

// console.log(connect("the Monster Is Very Dangerous When Eats Cakes"));


// var calcNumbers = {};
// function calculateFibonacciSum (num) {
//     if (calcNumbers[num]) {
//         return calcNumbers[num];
//     }
//     if (('number' === typeof num) && num <= 0) {
//         return "Fibonnaci series starts with 0. Please, enter any integer greater than or equal to 0";
//     } else if (('number' === typeof num) && num === 0) {
//         return 0;
//     } else if (('number' === typeof num) && (num === 1 || num === 2)) {
//         return 1;
//     } else {
//         var value = calculateFibonacciSum(num-1) + calculateFibonacciSum(num-2);
//         calcNumbers[num] = value;
//     }
//     for (var i = 0; )
// }

