// ADD

var add1 = document.getElementById("add1");
var add2 = document.getElementById("add2");
var add = document.getElementById("add");
var addRes = document.getElementById("addres");

add.addEventListener("click", adding);

function adding (event) {
    addRes.innerHTML = Number(add1.value) + Number(add2.value);
}

// SUBTR

var subt1 = document.getElementById("subt1");
var subt2 = document.getElementById("subt2");
var subtr = document.getElementById("subtr");
var subtrres = document.getElementById("subtrres");

subtr.addEventListener("click", subtrNo);

function subtrNo (event) {
    subtrres.innerHTML = Number(subt1.value) - Number(subt2.value);
}

// MULT

var mult1 = document.getElementById("mult1");
var mult2 = document.getElementById("mult2");
var mult = document.getElementById("mult");
var multres = document.getElementById("multres");

mult.addEventListener("click", multipl);

function multipl (event) {
    multres.innerHTML = Number(mult1.value) * Number(mult2.value);
}