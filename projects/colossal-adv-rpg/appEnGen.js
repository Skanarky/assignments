
// var rs = require("readline-sync");
// var keepPlaying = true;

// var player = {
//     name: "",
//     hp: 100,
//     enemiesKilled: 0,
//     inventory: ["Handful of Almonds"],
// }

// function Enemy() {
//     this.type = this.getRandomType();
//     this.hitPoints = this.genHitPoints();
//     this.item = this.getSpecialItem();
// }

// Enemy.prototype.getRandomType = function () {
//     var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
//     var rand = Math.floor(Math.random() * enemyTypes.length);
//     return enemyTypes[rand];
// }

// Enemy.prototype.genHitPoints = function () {
//     switch (this.type) {
//         case "Ancient Dragon":
//             return Math.floor((Math.random() * 21) + 80);
//         case "Prowler":
//             return Math.floor((Math.random() * 30) + 50);
//         case "Mighty Grunt":
//             return Math.floor((Math.random() * 30) + 20);
//     }
// }

// Enemy.prototype.getSpecialItem = function () {
//     var items = ["Cinnamon Berries", "Assasin's Belt of the Agile Lizard", "Gambler's Sapphire", "Carmel Tart", "Pocket Watch", "Mindskimmer Amulet"];
//     var rand = Math.floor(Math.random() * items.length);
//     return items[rand];
// }

// // returns how much damage (hitpoints) the enemy inflicted.
// function enemyAttack() {
//     var damage = Math.floor((Math.random() * 20));
//     console.log(`Your enemy inflicted ${damage} damage points.\n`);
//     return damage;
// }

// // returns 0 if the enemy killed you, 1 if you survived.
// function runAway() {
//     var escape = Math.floor(Math.random() * 2);
//     if (escape === 1) {
//         player.hp -= enemyAttack();
//         console.log(`You now have ${player.hp} hit points.\n`)
//         return 1;
//     } else {
//         player.hp = 0;
//         console.log(`\nThe beast was too much for you. :-(`);
//         return 0;
//     }
// }

// // returns "nextMove" - either [a]ttack or [r]un or "" for getting back to main game loop
// function fightBack(enemy) {
//     // choose random attack power (20 - 100)
//     var yourPower = Math.floor((Math.random() * 81) + 20);

//     // decrease the enemy's hit points by that much    
//     enemy.hitPoints -= yourPower;
//     console.log(`You hit the ${enemy.type} with a power of ${yourPower}! Its hit points are now ${enemy.hitPoints}.`)

//     if (enemy.hitPoints <= 0) {
//         // if the enemy's hp <= 0, then you killed it and you get a prize + some hp.
//         console.log(`\nGreat job, ${player.name}! You killed the ${enemy.type}. \nYou picked up its prized possession - ${enemy.item} - and added it to your inventory! \nYou also get a bonus of 39 hit points!\n`);
//         player.inventory.push(enemy.item);
//         player.hp += 39;
//         player.enemiesKilled++;
//         nextMove = ""; // no longer attacking or running
//         return nextMove;
//     } else {
//         // if the enemy is still alive, it hits you based on its power
//         player.hp -= enemyAttack();
//     }

//     if (player.hp <= 0) {
//         // if it killed you then the game ends
//         nextMove = "";
//     } else {
//         // you and the enemy are still alive so you can fight back or run
//         var nextMove = rs.keyIn("Do you want to [a]ttack or [r]un? ", {
//             limit: ['a', 'r']
//         });
//     }
//     return nextMove;
// }

// function getAttacked() {
//     var currEnemy = new Enemy();
//     console.log(`\nYou encounter a vicious ${currEnemy.type}. `);
//     fightFlight = rs.keyIn("Do you want to [a]ttack or [r]un? ", {
//         limit: ['a', 'r']
//     });
//     if (fightFlight === 'a') {
//         while (fightFlight === 'a') {
//             fightFlight = fightBack(currEnemy);
//         }
//     }
//     if (fightFlight === 'r') {
//         // if you run, there's a 50-50 chance you escape, but the enemy does attack you as you leave.
//         console.log(`\nYou are running, but the beast is chasing you. Will you survive??`);
//         runAway();
//     }
// }

// // START OF THE GAME
// console.log("\nWelcome to the Colossal Adventure RPG. This is a fun message. :-)");
// player.name = rs.question("What is your first name? ");
// console.log(`Good luck on your adventure, ${player.name}!\n`);

// function playTheGame() {
//     var choice = rs.keyIn("Enter 'w' to walk, 'p' to see your hit points and inventory, or 'q' to quit the game. ", {
//         limit: ['w', 'p', 'q']
//     });
//     var chance = Math.floor(Math.random() * 5)
//     switch (choice) {
//         case "w":
//             console.log(`You are walking.`);
//             if (chance === 0) {
//                 getAttacked();
//             }
//             break;
//         case "p":
//             console.log(`\n${player.name}, you have ${player.hp} hit points and the following items in your inventory: ${player.inventory.join(", ")}\n`);
//             break;
//         case "q":
//             console.log(`\nQuitters are losers. :-P`);
//             player.hp = 0;
//             break;
//     }
// }

// // keep playing while hitpoints > 0 && enemiesKilled < 3
// while (player.hp > 0 && player.enemiesKilled < 3) {
//     playTheGame();
// }

// if (player.hp <= 0) {
//     console.log(`Sorry ${player.name}, you were brave for playing the game, but... YOU LOSE.\n`);
// }

// if (player.enemiesKilled >= 3) {
//     console.log(`Congratulations, ${player.name}! You are super awesome and you won the game!\n`);
// }

console.log(Math.floor(Math.random() * 3));