const PersonInfo = require("../models/PersonInfo.model");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tutorial
  const personinfo = new PersonInfo({
    guid: req.body.guid,
    Name: req.body.Name,
    PhNum: req.body.PhNum,
    Org_Name: req.body.Org_Name,
    NRC: req.body.NRC,
    Address: req.body.Address,
    City: req.body.City,
    Country: req.body.Country,
    Visited_Reason: req.body.Visited_Reason,
  });

  // Save Tutorial in the database
  PersonInfo.create(personinfo, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the GuestInfo.",
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const guid = req.query.guid;

  PersonInfo.getAll(guid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving childinfo.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  PersonInfo.findById(req.params.guid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found PersonInfo with id ${req.params.guid}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving PersonInfo with id " + req.params.guid,
        });
      }
    } else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  PersonInfo.updateById(
    req.params.guid,
    new PersonInfo(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found GuestInfo with id ${req.params.guid}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating GuestInfo with id " + req.params.guid,
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  PersonInfo.remove(req.params.guid, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found PersonInfo with id ${req.params.guid}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete PersonInfo with id " + req.params.guid,
        });
      }
    } else res.send({ message: `PersonInfo was deleted successfully!` });
  });
};
