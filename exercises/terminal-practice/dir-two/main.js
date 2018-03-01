// Calling fns AFTER THEIR CREATION, using innerHTML

function printHelloOne() {
    let hello = "Hello World 1";
    let h1 = document.getElementById("append");
    const helloCreate = document.createElement("h1");
    helloCreate.innerHTML = hello;
    h1.appendChild(helloCreate);
};

printHelloOne();

function printHelloTwo() {
    var hello = "Hello Test 2";
    var h2 = document.getElementById("append2");
    h2.innerHTML = "<h2>" + hello + "</h2>";
};

printHelloTwo();

// Calling fns BEFORE THEIR CREATION, using text fns
printHelloThree();

function printHelloThree() {
    let h3 = document.getElementById("append3");
    h3.textContent = "Hello Guys 3";
};

printHelloFour();

function printHelloFour() {
    let h4 = document.getElementById("append5");
    let newLine = document.getElementById("append4");
    newLine.innerHTML = "<br />";
    h4.innerText = "Test Inner Text md 4";
};