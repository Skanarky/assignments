// MULT

var goomba5 = document.getElementById("mult1");
var bobomb7 = document.getElementById("mult2");
var cheep11 = document.getElementById("mult3");
var mult = document.getElementById("mult");
var result = document.getElementById("result");

goomba5.focus();
// mult.addEventListener("click", multipl);

// function multipl (event) {
//     var nGoo = Number(goomba5.value) * 5;
//     var nBob = Number(bobomb7.value) * 7;
//     var nCheep = Number(cheep11.value) * 11;
//     result.innerHTML = nGoo + nBob + nCheep;
// }

var doMagic = function (event) {
    var nGoo = Number(goomba5.value) * 5;
    var nBob = Number(bobomb7.value) * 7;
    var nCheep = Number(cheep11.value) * 11;
    result.innerHTML = nGoo + nBob + nCheep;
}

goomba5.addEventListener("input", doMagic);
bobomb7.addEventListener("input", doMagic);
cheep11.addEventListener("input", doMagic);