// #1

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
// var count = 0;
// for (var i = 0; i < officeItems.length; i++) {
//     if (officeItems[i] === "computer") {
//         count++;
//     }
// }

// console.log(count);


// #2 Bonus*2

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//         name: "Mike",
//         age: 12,
//         gender: "male"
//     },

//     {
//         name: "Madeline",
//         age: 80,
//         gender: "female"
//     },

//     {
//         name: "Cheryl",
//         age: 22,
//         gender: "female"
//     },
    
//     {
//         name: "Sam",
//         age: 30,
//         gender: "male"
//     },
    
//     {
//         name: "Suzy",
//         age: 4,
//         gender: "female"
//     }
// ];

// var maleNo = ", don't let HIM in.", femaleYes = ". SHE'S good to see Mad Max Fury Road.";
// var maleYes = ", let HIM in.", femaleNo = ". SHE'S NOT good to see Mad Max Fury Road.";

// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough" + femaleYes);
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road" + maleYes);
//     } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough" + femaleNo);
//     } else {
//         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road" + maleNo);
//     }
// }

// Optional bonus


var buttonPushes = [2, 5, 435, 4, 3];

function onOrOff () {
    var countPushes = 0;
    for (var i = 0; i < buttonPushes.length; i++) {
        countPushes += buttonPushes[i];
    }
    if (countPushes % 2 === 0) {
        console.log("Light ON");
    } else {
        console.log("Light OFF");
    }
}

onOrOff();