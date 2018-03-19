
var but = document.getElementById("yes");
var showMe = document.getElementById("show");
var count = 0;

but.addEventListener("click", function(event) {
    count++;
    showMe.innerHTML = count;
    localStorage.setItem("clicks", count);
})

showMe.innerHTML = localStorage.getItem("clicks");