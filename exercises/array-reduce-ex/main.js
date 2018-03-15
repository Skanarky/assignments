// callback fn-s (helpers) below

function addReduce(a, b) {
    var newDouble = a + b;
    return newDouble;
}

function makeToStr(a, b) {
    var newDouble = a.toString() + b.toString();
    return newDouble;
}

function countInObj(total, inpObjOne) {
    return total + inpObjOne.voted;
}

function countInObjPrice(total, inpObjOne) {
    return total + inpObjOne.price;
}

function countFlatten(total, inpArr) {
    return total.concat(inpArr);
}

//-------

function objCountYouth(total, inpObjOne) {
    if (inpObjOne.age >= 18 && inpObjOne.age <= 25) {
        total++;
    }
    return total;
}

function objCountVoteTrueYoung(total, inpObjOne) {
    if (inpObjOne.age >= 18 && inpObjOne.age <= 25 && inpObjOne.voted) {
        total++;
    }
    return total;
}

function objCountMids(total, inpObjOne) {
    if (inpObjOne.age >= 26 && inpObjOne.age <= 35) {
        total++;
    }
    return total;
}

function objCountVoteTrueMid(total, inpObjOne) {
    if (inpObjOne.age >= 26 && inpObjOne.age <= 35 && inpObjOne.voted) {
        total++;
    }
    return total;
}

function objCountOlds(total, inpObjOne) {
    if (inpObjOne.age >= 36 && inpObjOne.age <= 55) {
        total++;
    }
    return total;
}

function objCountVoteTrueOld(total, inpObjOne) {
    if (inpObjOne.age >= 36 && inpObjOne.age <= 55 && inpObjOne.voted) {
        total++;
    }
    return total;
}


// higher order fn below:

function arrReduceFunction(inpArr, callbackFn) {
    var newRedData = inpArr.reduce(callbackFn);
    return newRedData;
}

function arrReduceFunctionForCount(inpArr, callbackFn) {
    var newRedData = inpArr.reduce(callbackFn, 0);
    return newRedData;
}


function arrReduceFunctionForCountVoteAndPeople(inpArr) {
    var newVotersVote = {};

    newVotersVote.youngVotes = inpArr.reduce(objCountVoteTrueYoung, 0);
    newVotersVote.youth = inpArr.reduce(objCountYouth, 0);

    newVotersVote.midVotes = inpArr.reduce(objCountVoteTrueMid, 0);
    newVotersVote.mids = inpArr.reduce(objCountMids, 0);

    newVotersVote.oldVotes = inpArr.reduce(objCountVoteTrueOld, 0);
    newVotersVote.olds = inpArr.reduce(objCountOlds, 0);

    return newVotersVote;
}

// console.log(arrReduceFunction([1, 2, 3], addReduce));
// console.log(arrReduceFunction([1, 2, 3], makeToStr)); 
// OR JUST ----> to string -> .join()
// console.log([1, 2, 3].join(""));
// console.log(arrReduceFunctionForCount([
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ], countInObj));
// console.log(arrReduceFunctionForCount([
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ], countInObjPrice));
// console.log(arrReduceFunction([
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ], countFlatten));
var votersVoting = [{
    name: 'Bob',
    age: 30,
    voted: true
},
{
    name: 'Jake',
    age: 32,
    voted: true
},
{
    name: 'Kate',
    age: 25,
    voted: false
},
{
    name: 'Sam',
    age: 20,
    voted: false
},
{
    name: 'Phil',
    age: 21,
    voted: true
},
{
    name: 'Ed',
    age: 55,
    voted: true
},
{
    name: 'Tami',
    age: 54,
    voted: true
},
{
    name: 'Mary',
    age: 31,
    voted: false
},
{
    name: 'Becky',
    age: 43,
    voted: false
},
{
    name: 'Joey',
    age: 41,
    voted: true
},
{
    name: 'Jeff',
    age: 30,
    voted: true
},
{
    name: 'Zack',
    age: 19,
    voted: false
}
];
console.log(arrReduceFunctionForCountVoteAndPeople(votersVoting));