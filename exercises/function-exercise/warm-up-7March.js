// function retArr100 () {
//     var arr100 = [];
//     for (var i = 1; i < 101; i++) {
//         arr100.push(i);
//         // OR YOU CAN JUST MAKE AN IF ELSE WITH PUSH AND MAKE ONLY ONE LOOP
//     }
//     for (var j = 1; j < 101; j++) {
//         if (arr100[j] % 3 === 0) {
//             arr100[j] = "fizz";
//         } else if (arr100[j] % 5 === 0) {
//             arr100[j] = "buzz";
//         } else if (arr100[j] % 3 === 0 && arr100[i] % 5) {
//             arr100[j] = "fizzbuzz";
//         }
//     }
//     return arr100;
// }


// MORE EFFICIENT WAY below:

function retArr100 () {
    var arr100 = [];
    for (var i = 1; i < 101; i++) {
        if (i % 3 === 0) {
            arr100.push("fizz");
        } else if (i % 5 === 0) {
            arr100.push("buzz");
        } else if (i % 3 === 0 && i % 5) {
            arr100.push("fizzbuzz");
        } else {
            arr100.push(i);
        }        
    }
    return arr100;
}

console.log(retArr100());