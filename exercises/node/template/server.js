const express = require("express");  
const app = express();
const uuid = require("uuid");
const bodyParser = require("body-parser");

let cats = require("./cats.js");

const port = 8080;

// format
// {
//     "name": "The name",
//     "description": "The description of the todo"
//     "imageUrl": "http://www.myimage...."
//     "completed": false
    // generated bt the uuid():
//     "_id": "23k4lh23h2"
// }

// middleware... like the conveir LINE on the SERVER (from class example) 

app.use(bodyParser.json());


// routes

app.route("/cats")
    .get((req, res) => {
        res.status(200).send(cats);
    })
    // post req
// convert req body from JSON
// provide an id  to the data (cat) being added
    .post((req, res) => {
        // console.log(req.body);
        const newCat = req.body;
        //give data in req an id
        newCat._id = uuid();
        //save the data req body to the database
        cats.push(newCat);
        //send back the data that was added
        res.status(200).send(newCat);
    });


// GET ONE req OR DELETE and PUT req-s
//any reg-s to /cats/id endpoint will send the cat with this id

app.route("/cats/:id")
    .get((req, res) => {
        // get param id:
        // console.log(req.params.id);
        // find cat
        const { id } = req.params;
        const foundCat = cats.filter(cat => cat._id === id)[0];
        // send cat back
        if (foundCat) {
            res.status(200).send(foundCat);
        } else if (!foundCat) {
            //404
            res.status(404).send({message: `cat with id:${id} wasn't found!`});
        }
    })
    .delete((req, res) => {
        const { id } = req.params;
        cats = cats.filter(cat => cat._id === id);
        res.status(200).send({message: `cat with id:${id} was deleted!`});
        //OR req.status(204).send(); // No Content Message from Status 204  ...means deleted!
    })
    .put((req, res) => {
        // find param
        const { id } = req.params;
        //map through cats and replace the cat with the matching id with reg.body
        let editedCat = req.body;
        cats = cats.map(cat => cat._id === id ? editedCat = {...cat, ...editedCat } : cat);
        res.status(200).send(editedCat);
    })


app.listen(port, () => console.log("First server is running/listening, Ilian, on port: " + port));