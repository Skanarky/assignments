var formMain = document.getElementById("main");

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var ageInput = document.getElementById("age");
var varMale = document.getElementById("male");
var varFemale = document.getElementById("female");
var varUniverse = document.getElementById("universe");
var varLocation = document.getElementById("travel");
var varVegetarian = document.getElementById("vegetarian");
var varKosher = document.getElementById("kosher");
var varLactoseFree = document.getElementById("lactoseFree");
var varConfused = document.getElementById("confused");

var bigDataObj = {
    fName: "",
    lName: "",
    agePerson: 0,
    genderPerson: "",
    destPerson: "",
    dietPerson: []
}

var getNames = function (event) {
    // console.log(bigDataObj.fName);
    // console.log(event.target.value);
    if (event.target.name === 'firstName') {
        bigDataObj.fName = event.target.value;
    } else if (event.target.name === 'lastName') {
        bigDataObj.lName = event.target.value;
    }
    // console.log(bigDataObj);
}

firstName.addEventListener("input", getNames);
lastName.addEventListener("input", getNames);

var getAge = function (event) {
    bigDataObj.agePerson = event.target.valueAsNumber;
}

ageInput.addEventListener("input", getAge);

var count = 1;
var getGender = function (event) {
    count++;
    if (count % 2 === 0) {
        bigDataObj.genderPerson = event.target.name;
    } else if (count % 1 === 0) {
        bigDataObj.genderPerson = "None";
    }
}

varMale.addEventListener("change", getGender);
varFemale.addEventListener("change", getGender);
varUniverse.addEventListener("change", getGender);

var getLocation = function (event) {
    bigDataObj.destPerson = event.target.value;
}

varLocation.addEventListener("change", getLocation);

var getDiet = function (event) {
    if (event.target.checked) {
        bigDataObj.dietPerson.push(event.target.name);
    } else {
        var indexArr = bigDataObj.dietPerson.indexOf(event.target.name);
        bigDataObj.dietPerson.splice(indexArr, 1);
    }
}

varVegetarian.addEventListener("change", getDiet);
varKosher.addEventListener("change", getDiet);
varLactoseFree.addEventListener("change", getDiet);
varConfused.addEventListener("change", getDiet);

formMain.addEventListener("submit", function () {
    alert(`Names: ${bigDataObj.fName} ${bigDataObj.lName} \nAge: ${bigDataObj.agePerson} \nGender: ${bigDataObj.genderPerson} \nTravel Destination: ${bigDataObj.destPerson} \nFood Preferences: ${bigDataObj.dietPerson.join(", ")}`);
});


// if (count % 1 === 0) {
//     bigDataObj.genderPerson = event.target.name;
// } else if (count % 2 === 0 || count === 0) {
//     bigDataObj.genderPerson = "None";
// }    
// } else if (event.target.checked % 1 === 0 && event.target.name === "Female") {
//     bigDataObj.genderPerson = event.target.name;          
// } else if (event.target.checked % 1 === 0 && event.target.name === "I'm The Universe") {
//     bigDataObj.genderPerson = event.target.name;       
// } else {
//     bigDataObj.genderPerson = "None";
// }