
// function sum (x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         throw "Input must be a NUMBER"
//     }
//     return x + y;
// }

// try {
//     sum(1, "2");
// } catch (err) {
//     console.log(err);
// }

// console.log(sum(1, 2));

var userOneObj = {username: "sam", password: "123abc"};  

function login (objInp, username, password){
    if (objInp.username !== username) {
        throw "Invalid Username!";
    } else if (objInp.password !== password) {
        throw {message: "Invalid Password!"};
    } else {
        console.log("Login successful!")
    }
}

try {
    login (userOneObj, "sam", "123");
} catch (err) {
    // console.log(err);
    // console.log(err.message);
    throw err.message;
}
