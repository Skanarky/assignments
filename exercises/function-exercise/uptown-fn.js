// src https://coursework.vschool.io/uptown-function-you-up/

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];



// var joinArr = function (inputArray) {
//     var newArr = inputArray.join(" ");
//     return newArr;
// }

// var newStrLyr = joinArr(backwArr(lyrics));
// console.log(newLyr);

// var backwArr = function (inputArray) {
//     inputArray.reverse();
//     var newSong = inputArray.join(" ");
//     return newSong;
// }

// console.log(backwArr(lyrics));
// OR USE FN TO REVERSE STR var strReverse = str.split('').reverse().join('');


// ----------- NO
// function makeArrAndThenJoin (word) {
//     var newWord = word.split(" ");
    // let everyOth = newWord.filter((element, index) => {
    //     return index % 2 === 0;
    // });
    // var finString = everyOth.join(" ");
    // return finString;
// }

// var finalStr = makeArrAndThenJoin(newStrLyr);
// console.log(finalStr);


// ---------- NO

// function everyOthArr (inputArray) {
//     let everyOth = inputArray.filter((element, index) => {
//         return index % 1 === 0;
//     });
//     return everyOth();
// }
// console.log(everyOthArr(lyrics));

// function everyOth (inputArray) {
//     var temp = [];
//     for (var i = 0; i < inputArray.length; i += 2) {
//         temp.push(inputArray[i]);
//     }
//     return temp;
// }
// console.log(everyOth(lyrics));


// --------- OPTIONAL ----------

function revCouples () {
    // PSEUDO CODE STARTS HERE:
    // acces the array and pick every 2 elements, next to each other
    // save the filtered information - ARRAYs into OBJECT
    // Reverse the stored data (OBJECT), for EACH property of the OBJECT from step 2
    // make one array from the stored data from reversed object arrays
    // join the array from step 4 into a string
    

    // OR


    // Loop over the input array and SPLICE every other element, BUT THEN also put 
    // it back with SPLICE after the element next to it
}