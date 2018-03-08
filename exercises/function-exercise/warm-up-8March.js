// var alphabetUpLow = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
// var mark = "!@?:;}_{][\|(-)*&%$";
// var numb = "1234567890";

// function passGen(a) {
//     var newArrAlpha = [];
//     for (var i = 0; i < a; i++) {
//         var newAlph = alphabetUpLow.charAt(Math.floor(Math.random() * 51));
//         var newMark = mark.charAt(Math.floor(Math.random() * 18));
//         var newNumb = numb.charAt(Math.floor(Math.random() * 9));
//         var newLast = newAlph + newMark + newNumb;
//         newArrAlpha.push(newLast);
//     }
//     return newArrAlpha.join("");
// }

// console.log(passGen(5));

var alphabetUpLow = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
var mark = "!@?:=;}_{]+[\|(-)*&%$";
var numb = "1234567890";

function passGen() {
    var newArrAlpha = [];
    for (var i = 0; i < 3; i++) {
        var newAlph = alphabetUpLow.charAt(Math.floor(Math.random() * 51));
        var newMark = mark.charAt(Math.floor(Math.random() * 20));
        var newNumb = numb.charAt(Math.floor(Math.random() * 9));
        var newLast = newAlph + newMark + newNumb;
        newArrAlpha.push(newLast);
    }
    return newArrAlpha.join("");
}

console.log(passGen());