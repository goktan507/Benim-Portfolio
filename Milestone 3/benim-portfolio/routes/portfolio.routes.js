const portfolioController = require("../controllers/portfolio.controller");
var express = require("express");

var router = express.Router();

// initializing the portfolio's api routes for each method
// to its functionality in the portfolio controller
router
  .get("/portfolios", portfolioController.getPortfolios)
  .post("/portfolio", portfolioController.createPortfolio)
  .put("/portfolio/:id", portfolioController.updatePortfolio)
  .delete("/portfolio/:id", portfolioController.deletePortfolio);

// add the portfolio router to export
module.exports = router;
