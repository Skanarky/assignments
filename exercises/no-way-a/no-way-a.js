var word = "alphAbetical";

var removeLetterA = function (inputVarString) {
    return inputVarString.replace(/a/gi, "");
}

console.log(removeLetterA(word));