function doubleNo (a) {
    var newDouble = a * 2;
    return newDouble;
}

function fnToString (inpNumb) {
    var numToStr = inpNumb.toString();
    return numToStr;
}


function fnCapital (inpStr) {
    var toLowCaseStr = inpStr.toLowerCase();
    var newStrFromInp = toLowCaseStr.charAt(0).toUpperCase() + toLowCaseStr.slice(1);
    return newStrFromInp;
}

function printNameOnly (objectInp) {
    
}

function arrMapFunction (inpArr, callbackFn) {
    var newArr = inpArr.map(callbackFn);
    return newArr;
}

// console.log(arrMapFunction([2, 5, 100], doubleNo));
// console.log(arrMapFunction([2, 5, 100], fnToString));
// console.log(arrMapFunction(["john", "JACOB", "jinGleHeimer", "schmidt"], fnCapital));