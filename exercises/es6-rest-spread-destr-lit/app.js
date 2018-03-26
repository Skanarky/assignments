//---------
function collectAnimals(...animals) {
    return animals;
}

// console.log(collectAnimals("dog", "mouse"));

//---------

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

const food = {
    fruit,
    sweets,
    vegetables
};

// console.log(food);

//---------

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {
    location,
    duration
} = vacation;

// console.log(`We're going to have a good time in ${location} for ${duration}`);

//---------

// const [ firstItem ] = items;  
// const [ , secondItem ] = items;

//---------

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder;

// console.log(`My top three favorite activities are: ${firstFav}, ${secondFav} and ${thirdFav}`);  

//---------

function combineAnimals(arr1, arr2, ...arrays) {
    return [[ ...arr1, ...arr2, ], ...arrays ];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));