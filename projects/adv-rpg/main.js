var readlineSyncVar = require("readline-sync");

// readlineSyncVar.question("Whta uuup?");

var isAdmin = readlineSyncVar.keyInYN("Are you the admin");

if (isAdmin) {
    readlineSyncVar.question("What's the pass?");
} else {
    console.log("Welcome to this useless program")
}