var ask = require("readline-sync");

var player = {
    braveOneName: "",
    hitPointsPlayer: 100,
    enemiesKilled: 0,
    wonGoldenPickles: 0
};

var Enemy = function () {
    this.typeVillain = getRandomType();
    this.hitPointsVillain = this.genHitPointsVillain();
    this.goldenPicklesRewardVillain = this.makeGoldenPickles();
    // this.attackVillain = this.genAttackVillain();
};

var getRandomType = function () {
    var enemyTypes = ["The Joker", "The Mummy", "The Big, Bad, Ol' Wolf"];
    var rand = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[rand];
};

Enemy.prototype.genHitPointsVillain = function () {
    switch (this.typeVillain) {
        case "The Joker":
            return 70;
        case "The Mummy":
            return 50;
        case "The Big, Bad, Ol' Wolf":
            return 30;
    }
};

Enemy.prototype.makeGoldenPickles = function () {
    switch (this.typeVillain) {
        case "The Joker":
            return 20;
        case "The Mummy":
            return 15;
        case "The Big, Bad, Ol' Wolf":
            return 10;
    }
};

// Game HELPER functions

var braveOneAttacks = function (villainInput) {
    var randAtt = Math.ceil(Math.random() * 40) + 31;
    console.log(`\nYou hit the ${villainInput.typeVillain} with ${randAtt} points`);
    villainInput.hitPointsVillain -= randAtt;
    // return randAtt;
}

var villainAttacking = function (villainInput) {
    var damageFromVillain = Math.floor(Math.random() * 30) + 31;
    console.log(`\nYou got hit from ${villainInput.typeVillain} and lost ${damageFromVillain} hit points`);
    player.hitPointsPlayer -= damageFromVillain;
    // return damageFromVillain;
}

var runAfraid = function (theVillainInput) {
    var damageFromVillain = Math.floor(Math.random() * 30) + 31;
    var chanceToRunAway = Math.floor(Math.random() * 2);
    if (chanceToRunAway === 1) {
        player.hitPointsPlayer -= damageFromVillain;
        console.log(`\n${theVillainInput.typeVillain} got you! You now have ${player.hitPointsPlayer}`);
    } else {
        console.log(`\nO-o-o-h, that was close ${player.braveOneName.toLocaleUpperCase()}, you were able to escape from ${theVillainInput.typeVillain}... this time!!!`);
    }
}

var fight = function () {
    var villain = new Enemy();
    console.log(`\nOh boy... you just met ${villain.typeVillain}`);
    var fightOptions = ask.keyIn(`\nYou can RUN or stay and FIGHT! \nChoose: \n'r' to run\n'f' to fight`, {
        limit: ["r", "f"]
    });

    if (fightOptions === "f") {
        console.log(`\nFIGHT!!!`)
        while (villain.hitPointsVillain > 0 && player.hitPointsPlayer > 0) {
            braveOneAttacks(villain);
            villainAttacking(villain);
        }
        if (villain.hitPointsVillain <= 0) {
            console.log(`\nUnbelievable... you killed ${villain.typeVillain}!`);
            player.hitPointsPlayer += 70;
            player.wonGoldenPickles += villain.goldenPicklesRewardVillain;
            player.enemiesKilled++;
            console.log(`\nYou received 70 Hit Points and ${villain.goldenPicklesRewardVillain} Golden Pickles as a reward from ${villain.typeVillain}!`);
        }
    } else if (fightOptions === "r") {
        runAfraid(villain);
    }
};


//GamePlay

console.log(`\nWelcome to DESTROY THE VILLAIN!\nLet's see if you can defeat The Joker, The Mummy and The Big Bad Ol' Wolf and collect ALL OF THEIR GOLDEN PICKLES!\n`);
player.braveOneName = ask.question("What's your name, brave one?");
console.log(`\nLet's PLAY ${player.braveOneName.toUpperCase()}\nTo WIN this game you need to destroy 4 villains (Tip: The Joker earns you the most PICKLES)! \nAnd remeber - PICKLES ARE THE FORCE... let the pickles be with you, brave ${player.braveOneName.toUpperCase()}!\n`);

var gamePlay = function () {
    var gamePlayOptions = ask.keyIn(`\nChoose: \n'w' to WALK\n's' to SEE your status, you brave ${player.braveOneName.toUpperCase()}\n'q' to run away and QUIT like a LOSER`, {
        limit: ["w", "s", "q"]
    });

    var generateGamePlay = Math.floor(Math.random() * 3);
    if (gamePlayOptions === "w") {
        console.log(`\nY O U   W A L K   L I K E   A   B O S S !`);
        if (generateGamePlay === 2) {
            fight();
        };
    } else if (gamePlayOptions === "s") {
        console.log(`\nDear ${player.braveOneName.toUpperCase()}, \nYou got ${player.hitPointsPlayer} hit points; \nYou killed ${player.enemiesKilled} villains; \nYou earned so far ${player.wonGoldenPickles} golden pickles (which are THE FORCE!!!);`);
    } else if (gamePlayOptions === "q") {
        console.log(`\nDear ${player.braveOneName.toUpperCase()}, \nYou  A R E   A   T O T A L   L O S E R`);
        player.hitPointsPlayer = 0;
    }
};

// The Brave One has to kill 4 villains AND keep his HP above 0
while (player.enemiesKilled < 4 && player.hitPointsPlayer > 0) {
    gamePlay();
};
if (player.enemiesKilled >= 4) {
    console.log(`\nWo-o-o-o-w, YOU WON THE GAME, you mighty ${player.braveOneName.toUpperCase()}! That's surprising! Now go eat your ${player.wonGoldenPickles} pickles!!! \n`);
};
if (player.hitPointsPlayer <= 0) {
    console.log(`\nGAME OVER, ${player.braveOneName.toUpperCase()}!!! \nFeel free to try again anytime... loser!`);
};