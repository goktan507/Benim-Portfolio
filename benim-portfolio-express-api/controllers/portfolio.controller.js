const service = require("../services/portfolio.service");
const {DTO} = require("../models/DTO");

/*
*   Calls the portfolio service to return all portfolio
*   then returns the result in DTO model as JSON
*/
exports.getPortfolios = (req, res, next) => {
  service.getPortfolios(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    let dto = DTO(200, "Success", results)
    res.json(dto);
  });
};

/*
*   Calls the portfolio service to create the given portfolio
*   then returns the result in DTO model as JSON
*/
exports.createPortfolio = (req, res, next) => {
  service.createPortfolio(req.body, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad Request" + error});
    }
    let dto = DTO(200, "Success", results)
    res.json(dto);
  });
};

/*
*   Calls the portfolio service to update a row of portfolio with the given ID
*   then returns the result in DTO model as JSON
*/
exports.updatePortfolio = (req, res, next) => {
  service.updatePortfolio(req, req.body, (error, results) => {
    if (error) {    
      return res.status(400).send({ success: 0, data: "Bad Request" + error});
    }
    let dto = DTO(200, "Success", results)
    res.json(dto);
  });
};

/*
*   Calls the portfolio service to delete a row of portfolio with the given ID
*   then returns the result in DTO model as JSON
*/
exports.deletePortfolio = (req, res, next) => {
  service.deletePortfolio(req, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad Request" + error});
    }
    let dto = DTO(200, "Success", results)
    res.json(dto);
  });
};
