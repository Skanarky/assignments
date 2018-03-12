var ask = require("readline-sync");

var name = ask.question("What is your name? ");

var gameOptions = ["Put hand in hole", "Find the key", "Open the FREAKIN' door"];
var playerChoiceGameOptions = ask.keyInSelect(gameOptions, `Hi ${name}, I'll let you exit this room, but you have to play smart! I'll give you 3 options. Pick wisely: `);

while (gameOptions[playerChoiceGameOptions] !== "Find the key") {
    if (gameOptions[playerChoiceGameOptions] === "Put hand in hole") {
        console.log(`${name}, YOU DIED!`);
        return; 
    } else if (gameOptions[playerChoiceGameOptions] === "Open the FREAKIN' door")
        console.log(`Nope! Can't do, ${name}, YOU NEED A KEY!`);
        playerChoiceGameOptions = ask.keyInSelect(gameOptions, `Nope! Can't do, ${name}! Now, let's try again: `);
}

var gameOptionsTwo = ["Put hand in hole", "Open the FREAKIN' door"];
var goOn = ask.keyInSelect(gameOptionsTwo, `${name}, it looks like you found the key! Careful now, you're almost there: `);
if (gameOptionsTwo[goOn] === "Open the FREAKIN' door") {
    console.log("By-y-e FELICIA!")
} else if (gameOptions[goOn] === "Put hand in hole") {
    console.log(`${name}, YOU DIED!`);
}