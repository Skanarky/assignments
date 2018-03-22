
var but = document.getElementById("yes");
var showMe = document.getElementById("show");
var count = localStorage.getItem("clicks") || 0;

but.addEventListener("click", function(event) {
    count++;
    showMe.innerHTML = count;
    localStorage.setItem("clicks", count);
})

showMe.innerHTML = localStorage.getItem("clicks");


// localStorage.setItem("obj", JSON.stringify(obj));
// console.log(JSON.parse(localStorage.getItem("obj")));