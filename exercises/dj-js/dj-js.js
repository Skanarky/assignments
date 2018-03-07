var varButton = document.createElement("button");
var varButtonScreen = document.body;
varButtonScreen.style = "text-align: center";

varButtonScreen.prepend(varButton);

varButton.innerHTML = "Yo bro', come over here with this mouse of yours and play like a real DJ!";
varButton.style = "width: 500px; height: 500px; font-size: 60px";

varButton.addEventListener("mouseover", colBlue);

function colBlue (event) {
    event.preventDefault();
    varButton.innerHTML = "Nice, now click once and release!";
    varButton.style = "background-color: blue; width: 500px; height: 500px; font-size: 60px";
}

varButton.addEventListener("mousedown", colRed);

function colRed (event) {
    event.preventDefault();
    varButton.innerHTML = "";
    varButton.style = "background-color: red; width: 500px; height: 500px; font-size: 60px";
}

varButton.addEventListener("mouseup", colYellow);

function colYellow (event) {
    event.preventDefault();
    varButton.innerHTML = "Now, double click!";
    varButton.style = "background-color: yellow; width: 500px; height: 500px; font-size: 60px";
}

varButton.addEventListener("dblclick", colGreen);

function colGreen (event) {
    event.preventDefault();
    varButton.innerHTML = "AND SCROLL!";
    varButton.style = "background-color: green; width: 500px; height: 1500px; font-size: 60px";
}

window.addEventListener("scroll", colOrange);

function colOrange (event) {
    event.preventDefault();
    varButton.innerHTML = "YOU'RE NOW A PRO DJ... NOW CLICK";
    varButton.style = "background-color: orange; width: 500px; height: 1000px; font-size: 60px";
}