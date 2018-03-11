var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// VAR 1

var arrFromArrs = function (arr, str) {
    var finArr = [];
    for (var i = 0; i < arr.length; i++) {
        finArr.push(arr[i].concat(":"));
        for (var j = 0; j < str.length; j++) {
            finArr.push(str.toUpperCase().split("")[j]);
        }
    }
    return finArr;
};

console.log(arrFromArrs(people, alphabet));

// VAR 2

// var arrFromArrs = function () {
//     var finArr = [];
//     for (var i = 0; i < people.length; i++) {
//         finArr.push(people[i].concat(":"));
//         for (var j = 0; j < alphabet.length; j++) {
//             finArr.push(alphabet.toUpperCase().split("")[j]);
//         }
//     }
//     return finArr;
// };

// console.log(arrFromArrs());