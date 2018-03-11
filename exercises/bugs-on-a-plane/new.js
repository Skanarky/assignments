var form = document.getElementById("airline-form");
// var submit = document.getElementById("submit");
// var query = document.querySelector;

var firstName = document.getElementById("first-name");
function getFName (event) {
    travelObj.fName = event.target.value;
}

firstName.addEventListener("input", getFName);

var lastName = document.getElementById("last-name");
function getLName (event) {
    travelObj.lName = event.target.value;
}

lastName.addEventListener("input", getLName);

var age = document.getElementById("age");
function getAge (event) {
    travelObj.agePerson = event.target.value;
}

age.addEventListener("input", getAge);

// var gender = form.elements["gender"].value;
// var location = form.elements["travel-location"].value;
// var diet = [];
// if (form.elements["vegan"].checked) {
//     diet.push(document.getElementById("vegan").value);
// }
// if (form.elements["gluten"].checked) {
//     diet.push(document.getElementById("gluten").value);
// }
// if (form.elements["paleo"].checked) {
//     diet.push(document.getElementById("paleo").value);
// }

var travelObj = {
    fName: "",
    lName: "",
    agePerson: 0,
    genderPerson: "",
    destPerson: "",
    dietPerson: []
}

function formAlert() {
    alert("First Name: " + travelObj.fName + "\nLast Name: " + travelObj.lName + "\nAge: " + travelObj.agePerson + "\nGender: " + travelObj.genderPerson + "\nTravel Location: " + travelObj.destPerson + "\nDiet: " + travelObj.dietPerson.join(" ") + "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", formAlert);