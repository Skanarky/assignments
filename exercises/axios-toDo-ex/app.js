// var axios = require("axios"); DON'T NEED IT, I HAVE A SCRIPT FOR
// THAT IN THE INDEX.HTML

var urlApi = "https://api.vschool.io/ilian/todo/";

axios.get(urlApi).then(function (response) {
    var putLiOnscr = document.getElementById("note");
    console.log(response);
    var notesToDo = response.data;
    console.log(notesToDo);
    for (var i = 0; i < notesToDo.length; i++) {
        // console.log(notesToDo[i]);
        let li = document.createElement("li");
        li.innerHTML = `<strong>Title:</strong> ${notesToDo[i].title} | <strong>Description:</strong> ${notesToDo[i].description}`;
        let buttDelete = document.createElement("button");
        buttDelete.style = "font-weight:bold; background-color:white";
        let idFromDataObj = notesToDo[i]._id;
        let buttChecked = document.createElement("input");
        buttChecked.type = "checkbox";
        buttChecked.checked = notesToDo[i].completed;
        buttDelete.innerHTML = "DELETE";
        putLiOnscr.appendChild(li);
        putLiOnscr.appendChild(buttDelete);
        li.appendChild(buttChecked);
        if (notesToDo[i].completed) {
            li.style.textDecoration = "line-through";
        } else if (!event.target.checked) {
            li.style.textDecoration = "none";
        }
        buttChecked.addEventListener("change", function (event) {
            event.preventDefault();
            axios.put(urlApi + idFromDataObj, {
                completed: event.target.checked
            }).then(function () {
                if (event.target.checked) {
                    li.style.textDecoration = "line-through";
                } else if (!event.target.checked) {
                    li.style.textDecoration = "none";
                }
            });
        });
        buttDelete.addEventListener("click", function (event) {
            event.preventDefault();
            axios.delete(urlApi + idFromDataObj).then(function (response) {
                putLiOnscr.removeChild(li);
                putLiOnscr.removeChild(buttDelete);
            });
        });
    }
});

//form
var addToDo = document.getElementById("main");

//inputs
var toDoAction = document.getElementById("toDoAction");
toDoAction.focus();
var descr = document.getElementById("descr");
// var isComplete = document.getElementById("isComplete");

var toObjForm = {
    title: "",
    description: "",
    completed: false
}

var getToDo = function (event) {
    toObjForm.title = event.target.value;
}

var getDescr = function (event) {
    toObjForm.description = event.target.value;
}

// var getIsComplete = function (event) {
//     toObjForm.completed = event.target.value;
// }

toDoAction.addEventListener("input", getToDo);
descr.addEventListener("input", getDescr);
// isComplete.addEventListener("input", getIsComplete);

addToDo.addEventListener("submit", function (event) {
    event.preventDefault();
    axios.post(urlApi, toObjForm).then(function (response) {
        // console.log(response.data);
        var putLiOnscr = document.getElementById("note");
        var notesToDo = response.data;
        var li = document.createElement("li");
        li.innerHTML = `<strong>Title:</strong> ${notesToDo.title} | <strong>Description:</strong> ${notesToDo.description}`;
        putLiOnscr.appendChild(li);
        let buttDelete = document.createElement("button");
        buttDelete.style = "font-weight:bold; background-color:white";
        let idFromDataObj = notesToDo._id;
        let buttChecked = document.createElement("input");
        buttChecked.type = "checkbox";
        buttChecked.checked = notesToDo.completed;
        buttDelete.innerHTML = "DELETE";
        putLiOnscr.appendChild(li);
        putLiOnscr.appendChild(buttDelete);
        li.appendChild(buttChecked);
        if (notesToDo.completed) {
            li.style.textDecoration = "line-through";
        } else if (!event.target.checked) {
            li.style.textDecoration = "none";
        }
        buttChecked.addEventListener("change", function (event) {
            event.preventDefault();
            axios.put(urlApi + idFromDataObj, {
                completed: event.target.checked
            }).then(function () {
                if (event.target.checked) {
                    li.style.textDecoration = "line-through";
                } else if (!event.target.checked) {
                    li.style.textDecoration = "none";
                }
            });
        });
        buttDelete.addEventListener("click", function (event) {
            event.preventDefault();
            axios.delete(urlApi + idFromDataObj).then(function (response) {
                putLiOnscr.removeChild(li);
                putLiOnscr.removeChild(buttDelete);
            });
        });
    });
    toDoAction.value = "";
    descr.value = "";
});