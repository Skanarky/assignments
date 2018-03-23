// // Extra
var shopListStoreArray = JSON.parse(sessionStorage.getItem("toDos")) || [];

var inputForm = document.getElementById("inputForm");
inputForm.inputTag.focus();
// var list = document.getElementById("list");

// like POST
function createList(event) {
    event.preventDefault();
    var list = document.getElementById("list");
    shopListStoreArray.push(inputForm.inputTag.value);
    sessionStorage.setItem("toDos", JSON.stringify(shopListStoreArray));

    var li = document.createElement("li");
    var delButton = document.createElement("button");
    var span = document.createElement("span");
    li.id = inputForm.inputTag.value;
    delButton.value = inputForm.inputTag.value;
    delButton.style = "background-color: pink";
    delButton.innerHTML = "X";
    delButton.id = "erase";
    span.innerHTML = inputForm.inputTag.value;
    list.appendChild(li);
    li.appendChild(delButton);
    li.appendChild(span);
    inputForm.inputTag.value = "";
    inputForm.inputTag.focus();
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        shopListStoreArray.splice(shopListStoreArray.indexOf(event.target.value), 1);
        sessionStorage.setItem("toDos", JSON.stringify(shopListStoreArray));

        list.removeChild(li);
    });
}

inputForm.addEventListener("submit", createList);

// like GET
for (var i = 0; i < shopListStoreArray.length; i++) {
    var list = document.getElementById("list");
    var li = document.createElement("li");
    var delButton = document.createElement("button");
    var span = document.createElement("span");
    // li.id = shopListStoreArray[i];
    delButton.value = shopListStoreArray[i];
    delButton.style = "background-color: pink";
    delButton.innerHTML = "X";
    span.innerHTML = shopListStoreArray[i];
    li.appendChild(delButton);
    li.appendChild(span);
    if (shopListStoreArray[i]) {
        list.appendChild(li);
    } else if (event.target.value) {
        list.removeChild(li);
    }

    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        var theParent = event.target.parentNode;
        shopListStoreArray.splice(shopListStoreArray.indexOf(event.target.value), 1);
        sessionStorage.setItem("toDos", JSON.stringify(shopListStoreArray));
        if (event.target.value) {
            list.removeChild(theParent);
        } else if (!event.target.value) {
            list.appendChild(li);
        }
    });
}

