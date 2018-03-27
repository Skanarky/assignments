//--------- REST
function collectAnimals(...animals) {
    return animals;
}

// console.log(collectAnimals("dog", "mouse"));

//--------- OBJECT Literals

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

const food = {
    fruit,
    sweets,
    vegetables
};

// console.log(food);

//--------- DESTRUCTING / DECONSTRUCTING Object

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {
    location,
    duration
} = vacation;

// console.log(`We're going to have a good time in ${location} for ${duration}`);

//--------- DESTRUCTING / DECONSTRUCTING Array I

// const [ firstItem ] = items;  
// const [ , secondItem ] = items;

//--------- DESTRUCTING / DECONSTRUCTING Array II

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

// console.log(`My top three favorite activities are: ${firstFav}, ${secondFav} and ${thirdFav}`);  


//--------- SPREAD

function combineAnimals(arr1, arr2, arr3) {
    return [...arr1, ...arr2, ...arr3];
}

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));


//--------- REST + SPREAD... but I still need to LOOP --> so REDUCE or forEach... etc...

function combineAnimals(...arr) {
    return arr.reduce((total, innerArr) => [...total, ...innerArr]);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, [1, true, 4, false], ["a", {propOne: 1, propTwo: "two"}]));


//--------- MAKING IT ES6xy I

// function product(a, b, c, d, e) {
//     var numbers = [a, b, c, d, e];

//     return numbers.reduce(function (acc, number) {
//         return acc * number;
//     }, 1)
// };

function product(...num) {
    return num.reduce((acc, number) => acc * number, 1)
}

// console.log(product(2, 3, 5));


//--------- MAKING IT ES6xy II

function unshift(array, ...inpSomething) {
    return [inpSomething, array].reduce((total, innerArr) => [...total, ...innerArr]);
}

// console.log(unshift(["12", true, 1, 2], 2, "big", false));


//--------- OBJECT LITERALS and DECONSTRUCTING / DESTRUCTING

//ES6
const populatePeople = (names) => names.map((name) => {
    name = name.split(" ");

    // console.log(name);

    // My code below:

    let [firstName] = name;
    let [, lastName] = name;

    return {
        firstName,
        lastName
    }
});

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

//ES5 + ES6
// function populatePeople(names) {
//     return names.map(function (name) {
//         name = name.split(" ");
        
//         // console.log(name);
        
//         // My code below:

//         let [firstName] = name;
//         let [, lastName] = name;

//         return {
//             firstName,
//             lastName
//         }
//     });
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

// ES5 mainly
// function populatePeople(names) {
//     return names.map(function (name) {
//         name = name.split(" ");
        
//         // console.log(name);
        
//         // My code below:

//         var firstName = name[0];
//         var lastName = name[1];

//         return {
//             firstN: firstName,
//             lastN: lastName
//         }
//     });
// }

// console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));