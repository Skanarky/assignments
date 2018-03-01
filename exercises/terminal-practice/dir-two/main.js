let hello = "Hello World";
let h1 = document.getElementById("append");
const helloCreate = document.createElement("h1");
helloCreate.innerHTML = hello;
h1.appendChild(helloCreate); 

let h2 = document.getElementById("append2");
h2.textContent = "Hello Guys";