if (5 > 3) {
    console.log("is greater than");
};

if ("cat".length === 3) {
    console.log("is the length");
}

if ("cat" === "dog") {
    console.log("are the same");
} else {
    console.log("not the same");
}

// Bronze

var person = {
    name: "Bobby",
    age: 12
};

if (person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
}

if (person.name[0] === "B") {
    console.log(person.name + "is allowed to go to the movie");
}

if (person.name[0] === "B" && person.age > 18) {
    console.log(person.name + "is allowed to go to the movie");
}

// Silver

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}

if (3*4 > 10 + 5 > 10) {
    console.log("yes");
} else {
    console.log("no");
}

// Gold

let dogString = "dog";
if (typeof dogString === "string" || dogString instanceof String) {
    console.log("yes, it's a string");
} else {
    console.log("yes, it's not string");
}

let dogHappy = "true";
if (dogHappy instanceof Boolean) {
    console.log("yes, it's a boolean");
} else {
    console.log("no, it's not a boolean");
}

if (typeof(dogMoodBad) !== "undefined") {
    console.log("is defined");
} else {
    console.log("it's not defined");
}

// OR

var dogMood = "It's a happy dog!";
if (dogMood) {
    console.log("is defined");
} else {
    console.log("it's not defined");
}

// Letters numbers > = <

// 'a'.charCodeAt(0)

if ("b".charCodeAt(0) > 95) {
    console.log("'B' is more than 95");
} else {
    console.log("'B' is less than 95");
}
console.log("b".charCodeAt(0));


if ("b" > "a") {
    console.log("'B' is more than 'a'");
} else {
    console.log("'B' is less than 'a'");
}
console.log("a".charCodeAt(0));

var myNum = 11;
myNum % 2 === 0 ? console.log("My number is even") : console.log("My number is odd"); 

// if (myNum % 2 === 0) {
//     console.log("My number is even");
// } else {
//     console.log("My number is odd");
// }

