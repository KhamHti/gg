module.exports = (app) => {
  const personinfo = require("../controllers/PersonInfo.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", personinfo.create);

  // Retrieve all Tutorials
  router.get("/", personinfo.findAll);

  // Retrive a all childinfo with pnumber
  // router.get("/:pnumber", personinfo.findBypnumber);

  // Retrieve a single Tutorial with id
  router.get("/:guid", personinfo.findOne);

  // Update a Tutorial with id
  router.put("/:guid", personinfo.update);

  // Delete a Tutorial with id
  router.delete("/:guid", personinfo.delete);

  app.use("/personinfo", router);
};
