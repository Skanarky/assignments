// make a dynamic way to generate equal objectas - type, hitPoints, defense

// for the fn we do closure (keeping the array in the fn, not as a parameter of the fn)

var Enemy = function () {
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;
}

function getRandomType() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genHitPoints = function () {
    switch (this.type) {
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Prowler":
            return Math.floor(Math.random() * 30) + 50;
        case "Mighty Grunt":
            return Math.floor(Math.random() * 30) + 20;
    }
}

function printEnemies() {
    for (var i = 0; i < 100; i++) {
        console.log(new Enemy());
    }
}

printEnemies();





// BELOW is NOT THE RIGHT WAY, BUT IT DOES WORK (this., prototype, etc.) -----

// var Enemy = function () {
//     this.conType = getRandomType();
//     this.conHitPoint = genHitPoints(this.conType);
//     this.conDefensse = this.conHitPoint * 3;
// }

// var getRandomType = function () {
//     var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
//     var randomIndex = Math.floor(Math.random() * enemyTypes.length);
//     return enemyTypes[randomIndex];
// }

// var genHitPoints = function (inpType) {
//     switch(inpType){
//         case "Ancient Dragon":
//             return Math.floor(Math.random() * (101 - 80) + 80);
//         case "Prowler":
//             return Math.floor(Math.random() * (80 - 50) + 50);
//         case "Mighty Grunt":
//             return Math.floor(Math.random() * (50 - 20) + 20); 
//     }
// }

// var enem1 = new Enemy();
// console.log(enem1);