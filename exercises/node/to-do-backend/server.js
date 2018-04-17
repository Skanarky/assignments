const express = require("express");
const app = express();
let toDosDatabase = require("./data.js");

const uniqueIdGen = require("uuid");
const bodyParser = require("body-parser");

const port = 3005;

// handling parsing info
app.use(bodyParser.json());

//routes

//GET ALL and POST
app.route("/todos")
    .get((req, res) => {
        res.status(200).send(toDosDatabase)
    })
    .post((req, res) => { 
        const newToDo = req.body;
        newToDo._id = uniqueIdGen();
        toDosDatabase.push(newToDo);
        res.status(200).send(newToDo);
    });

// GET ONE, PUT, DELETE
app.route("/todos/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundToDo = toDosDatabase.filter(toDo => toDo._id === id)[0];
        // send toDo back OR HANDLE not found
        if (foundToDo) {
            res.status(200).send(foundToDo);
        } else if (!foundToDo) {
            //404
            res.status(404).send({message: `toDo with id:${id} wasn't found!`});
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        toDosDatabase = toDosDatabase.filter(toDo => toDo._id !== id);
        res.status(200).send({message: `toDo with id:${id} was deleted!`});
        //OR req.status(204).send(); // No Content Message from Status 204  ...means - deleted!
    })
    .put((req, res) => {
        const { id } = req.params;
        let editedToDo = req.body;
        toDosDatabase = toDosDatabase.map(toDo => toDo._id === id ? editedToDo = {...toDo, ...editedToDo } : toDo);
        res.status(200).send(editedToDo);
    })

//server
app.listen(port, () => console.log(`The ToDos Server is listening on port: ${port}`));