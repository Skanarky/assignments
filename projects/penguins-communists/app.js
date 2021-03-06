// create class Parties (... Players generator...)
class Party {
    constructor() {
        this.name = "";
        this.startingPopulation = 1000000;
    }

    setName(namePicked) {
        if (namePicked === "Penguins") {
            this.name = "Penguins";
        } else if (namePicked === "Communists") {
            this.name = "Communists";
        } else {
            console.log(`Not a valid name. Choose names between 'Penguins' and 'Communists'`);
        }
    }
}

// define initial attack

function coinFlipper() {
    let randNo = Math.floor(Math.random() * 2);
    if (randNo === 0) {
        sendNuke(penguins, successfulAttack, notSuccessfulAttack);
    } else if (randNo === 1) {
        sendNuke(communists, successfulAttack, notSuccessfulAttack);
    }
}

// fn attack

function sendNuke(attackedParty, callbackSuccessTrue, callbackSuccessFlase) {
    let randNoSuccessAttack = Math.floor(Math.random() * 3);
    if (randNoSuccessAttack === 2) {
        callbackSuccessTrue(attackedParty);
    } else {
        callbackSuccessFlase(attackedParty);
    }
}

// helper/callback fn-s for main attack fn

function successfulAttack(party) {
    let nukeDamage = 250000;
    if (party.name === "Communists") {
        console.log(`\nThe Penguins' nuke hit the Communists!!!`);
        party.startingPopulation -= nukeDamage;
        console.log(`Communists have now ${party.startingPopulation} people alive!!!`);
    } else if (party.name === "Penguins") {
        console.log(`\nThe Communists' nuke hit the Penguins!!!`);
        party.startingPopulation -= nukeDamage;
        console.log(`Penguins have now ${party.startingPopulation} penguins alive!!!`);
    }
}

function notSuccessfulAttack(party) {
    if (party.name === "Communists") {
        console.log("\nThe Penguins' nuke missed the Communists and landed in the ocean");
    } else if (party.name === "Penguins") {
        console.log("\nThe Communists' nuke missed the Penguins and landed in the ocean");
    }
}


//GAME

// creating parties (players)
const penguins = new Party();
const communists = new Party();
penguins.setName("Penguins");
communists.setName("Communists");


// Start

//1
console.log(`\n\nA war has started...`);

setTimeout(function () {
//2
    console.log(`\n... between... the ${penguins.name} and the ${communists.name}!\n\nLet's see who is going to survive the war!\n\n\n- - - - - - - - - - - -\n`);
    
//3
    let myDramatic = setInterval(stopIt, 4500);

    function stopIt() {
        if (penguins.startingPopulation <= 0 || communists.startingPopulation <= 0) {
            clearInterval(myDramatic);
//4
            if (penguins.startingPopulation <= 0) {
                console.log(`\n\n- - - - - - -\n\nThe ${communists.name} survived!\nThey have to recreate their life with ${communists.startingPopulation} people left... after this horrible war!\n`);
            } else if (communists.startingPopulation <= 0) {
                console.log(`\n\n- - - - - - -\n\nThe ${penguins.name} survived!\nThey have to recreate their life with ${penguins.startingPopulation} penguins left... after this horrible war!\n`);
            }
        } else {
            coinFlipper();
        }
    };
}, 4500);



//WITHOUT all the drama... (a.k.a. without the timers :) )

// while (penguins.startingPopulation > 0 && communists.startingPopulation > 0) {
//     coinFlipper();
// }

// if (penguins.startingPopulation <= 0) {
//     console.log(`\n\n- - - - - - -\nThe ${communists.name} survived! They have to recreate their life with ${communists.startingPopulation} people left... after this horrible war!\n`);
// } else if (communists.startingPopulation <= 0) {
//     console.log(`\n\n- - - - - - -\nThe ${penguins.name} survived! They have to recreate their life with ${penguins.startingPopulation} penguins left... after this horrible war!\n`);
// }