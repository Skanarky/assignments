function madeNDimArray (row, colon, content) {
    var lotsOfNumbers = [];
    for (var i = 0; i < row; i++) {
        lotsOfNumbers.push([]);
        for (var j = 0; j < colon; j++) {
            lotsOfNumbers[i].push(content);
        }
    }
    return lotsOfNumbers;
}


console.log(madeNDimArray(5, 6, "Nice!"));