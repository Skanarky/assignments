const express = require("express");
const agencyRouter = express.Router();

const AgencyModel = require("../models/agencies.js");

//actual routes go here
agencyRouter.route("/")
    .get((req, res) => {
        AgencyModel.find(req.query, (err, foundAgencies) => {
            if (err) return res.send(err);
            res.status(200).send(foundAgencies);
        })
    })
    .post((req, res) => {
        const newAgency = new AgencyModel(req.body);
        newAgency.save((err, addedAgency) => {
            if (err) return res.send(err);
            res.status(201).send(addedAgency);
        })
    });

// GET one request
agencyRouter.route("/:id")
    .get((req, res) => {
        // AgencyModel.findById(req.params.id, ()=>{})
        AgencyModel.findOne({ _id: req.params.id }, (err, foundAgency) => {
            if (err) return res.send(err);
            if (!foundAgency) return res.status(404).send({ message: "Agency not found" })
            res.status(200).send(foundAgency);
        })
    })
    // DELETE one request
    .delete((req, res) => {
        // AgencyModel.findByIdAndRemove(req.params.id, ()=>{})
        AgencyModel.findOneAndRemove({ _id: req.params.id }, (err, deletedAgency) => {
            if (err) return res.send(err);
            if (!deletedAgency) return res.status(404).send({ message: "Agency not found" })
            res.status(204).send();
        })
    })
    //PUT one
    .put((req, res) => {
        // AgencyModel.findByIdAndUpdate(req.params.id,()=>{});
        AgencyModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedAgency) => {
            if (err) return res.send(err);
            if (!updatedAgency) return res.status(404).send({ message: "Agency not found" });
            res.status(200).send(updatedAgency);
        })
    })

module.exports = agencyRouter;