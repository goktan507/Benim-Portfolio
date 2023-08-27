const skillsController = require("../controllers/skills.controller");
var express = require("express");

var router = express.Router();

// initializing the skills routes for each method
// to its functionality in the controller
router
  .get("/skills", skillsController.getSkills)
  .post("/skill", skillsController.createSkills)
  .put("/skill/:id", skillsController.updateSkills)
  .delete("/skill/:id", skillsController.deleteSkills);

// add the product line rounter to export
module.exports = router;
