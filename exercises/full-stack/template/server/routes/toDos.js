const express = require("express");

const toDoRouter = express.Router();
const uniqueIdGen = require("uuid");

let toDosDatabase = require("./../data.js");

//GET ALL and POST
toDoRouter.route("/")
    // .get((req, res) => {
    //     res.status(200).send(toDosDatabase)
    // })
    .get((req, res) => {
        // console.log(req.query);
        const {query} = req;
        const queryToDos = toDosDatabase.filter((toDo => {
            for(let key in query) {
                if (!toDo.hasOwnProperty(key) || String(toDo[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }));
        if (queryToDos.length > 0) {
            res.status(200).send(queryToDos);
        } else {
            //404 + message OR just message
            res.status(404).send({message: `To Dos with the querried parameters were not found!`});
        }
        // res.status(200).send(queryToDos);
    })
    .post((req, res) => { 
        const newToDo = req.body;
        newToDo._id = uniqueIdGen();
        toDosDatabase.push(newToDo);
        res.status(200).send(newToDo);
    });

// !? get ALL toDos' Names
toDoRouter.route("/names")
    .get((req, res) => {
        // just names
        const foundToDoNames = toDosDatabase.map(toDo => {
            const { name, completed, _id} = toDo;
            return {
                name,
                completed,
                _id
            }
        });
        // adding query to the above path
        const {query} = req;
        const queryfoundToDoNames = foundToDoNames.filter((toDo => {
            for(let key in query) {
                if (!toDo.hasOwnProperty(key) || String(toDo[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }));
        // send toDos' Names, with query, back OR HANDLE not found
        if (foundToDoNames.length > 0) {
            res.status(200).send(queryfoundToDoNames);
        } else {
            //404 + message OR just message
            res.status(404).send({message: `To Dos with property 'name' and the querried parameters were not found!`});
        }
    });


// GET ONE, PUT, DELETE
toDoRouter.route("/:id")
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


module.exports = toDoRouter;