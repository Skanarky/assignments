// Start

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"];
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

// Bronze

// var numbers = [];
// for (var i = 0; i < 10; i++) {
//     numbers.push(i);
// }
// console.log(numbers);

// for (var i = 0; i < 101; i += 2) {
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var fruitNew = [];
// for (var i = 0; i < fruit.length; i += 2) {
//     fruitNew.push(fruit[i]);
// }
// console.log(fruitNew);


// Silver

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
// ];

// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }

// var names = [];
// var occupations = [];
// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }
// console.log(names);
// console.log(occupations);

// var namesEvOther = [];
// var occupationsEvOtherSing = [];
// for (var i = 0; i < peopleArray.length; i += 2) {
//     namesEvOther.push(peopleArray[i].name);
// }

// for (var i = 1; i < peopleArray.length; i += 2) {
//     occupationsEvOtherSing.push(peopleArray[i].occupation);
// }

// console.log(namesEvOther);
// console.log(occupationsEvOtherSing);


// Gold

// var lotsOfNumbers = [];
// for (var i = 0; i < 3; i++) {
//     lotsOfNumbers.push([]);
//     for (var j = 0; j < 3; j++) {
//         lotsOfNumbers[i].push(0);
//     }
// }

// console.log(lotsOfNumbers);


// var lotsOfNumbers = [];
// for (var i = 0; i < 3; i++) {
//     lotsOfNumbers.push([]);
//     for (var j = 0; j < 3; j++) {
//         lotsOfNumbers[i].push(i);
//     }
// }

// console.log(lotsOfNumbers);


// var lotsOfNumbers = [];
// for (var i = 0; i < 3; i++) {
//     lotsOfNumbers.push([]);
//     for (var j = 0; j < 3; j++) {
//         lotsOfNumbers[i].push(j);
//     }
// }

// console.log(lotsOfNumbers);



var lotsOfNumbers = [];
for (var i = 0; i < 3; i++) {
    lotsOfNumbers.push([]);
    for (var j = 0; j < 3; j++) {
        lotsOfNumbers[i].push("x");
    }
}

console.log(lotsOfNumbers);