const express = require("express");

const hunterRouter = express.Router();
const uniqueIdGen = require("uuid");

let huntersDatabase = require("./../data.js");

//GET ALL and POST
hunterRouter.route("/")
    .get((req, res) => {
        // console.log(req.query);
        const {query} = req;
        const queryHunters = huntersDatabase.filter((hunter => {
            for(let key in query) {
                if (!hunter.hasOwnProperty(key) || String(hunter[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }));
        if (queryHunters.length > 0) {
            res.status(200).send(queryHunters);
        } else {
            res.status(404).send({message: `Hunters with the querried parameters were not found!`});
        }
    })
    .post((req, res) => { 
        const newHunter = req.body;
        newHunter._id = uniqueIdGen();
        huntersDatabase.push(newHunter);
        res.status(200).send(newHunter);
    });

// get ALL hunters' last names
hunterRouter.route("/lastnames")
    .get((req, res) => {
        const foundHunterNames = huntersDatabase.map(toDo => {
            const { lastName, _id} = toDo;
            return {
                name,
                _id
            }
        });
        const {query} = req;
        const queryfoundHunterNames = foundHunterNames.filter((hunter => {
            for(let key in query) {
                if (!hunter.hasOwnProperty(key) || String(hunter[key]).toLowerCase() !== query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }));
        if (foundHunterNames.length > 0) {
            res.status(200).send(queryfoundHunterNames);
        } else {
            res.status(404).send({message: `Hunters with property 'last name' and the querried parameters were not found!`});
        }
    });


// GET ONE, PUT, DELETE
hunterRouter.route("/:id")
    .get((req, res) => {
        const { id } = req.params;
        const foundHunter = huntersDatabase.filter(hunter => hunter._id === id)[0];
        if (foundHunter) {
            res.status(200).send(foundHunter);
        } else if (!foundHunter) {
            res.status(404).send({message: `Hunter with id: ${id} wasn't found!`});
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        huntersDatabase = huntersDatabase.filter(hunter => hunter._id !== id);
        res.status(200).send({message: `hunter with id: ${id} was deleted!`});
        //OR req.status(204).send(); // No Content Message from Status 204  ...means - deleted!
    })
    .put((req, res) => {
        const { id } = req.params;
        let editedHunter = req.body;
        huntersDatabase = huntersDatabase.map(toDo => toDo._id === id ? editedHunter = {...toDo, ...editedHunter } : toDo);
        res.status(200).send(editedHunter);
    })


module.exports = hunterRouter;