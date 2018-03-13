var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = ask.keyInSelect(options, "What would you like to do today?: ");

while (options[option] !== 'fight bears'){
  if (options[option] === 'pick flowers') {
    console.log("You pick some flowers. You make a bouquet.");
    return;
  } else if (options[option] === 'shoot guns') {
    console.log("You shoot guns. And shoot... shoot...");
    return;
  }
}

console.log("You fought a bear and got beat up VERY BADLY... ROFL!");
