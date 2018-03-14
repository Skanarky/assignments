var ask = require("readline-sync");

var player = {
    name: playerName,
    hp: 100,
    attackPower: undefined,
    enemiesKilled: 0
};

var Enemy = function () {
    this.attackEnemyPower = Math.floor(Math.random() * 20) + 10;
    this.hp = 50;
};


console.log("Welcome to this awesome game. Let's start");
var playerName = ask.question("What's your name: ");

// wincon... ? many enemies you killed, etc.
// --> while loop continues as long as win or loose con are not met.... hp  is > 0, or my wincon is not met



// set win/loose con WHILE loop
// while(player.hp > 0 && player.enemiesKilled < 3) {

// }