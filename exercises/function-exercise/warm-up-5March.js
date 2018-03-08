// var word = "alphAbetical";

// var removeLetterA = function (inputVarString) {
//     return inputVarString.replace(/a/gi, "");
// }

// console.log(removeLetterA(word));

var input = "boOKkeeper larry";

var removeDup = function (word) {
    let output = {
        noDupe: "",
        extras: ""
    };

    for (var i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) === i) {
            // WHAT IF CHARACTERS ARE lower and UPPER case word.replace(/word[i]/gi, );
            output.noDupe += word[i];
        } else {
            output.extras += word[i];
        }
    };
    return output;
}

console.log(removeDup(input));
