const db = require("../config/db.config");
const mySqlConnect = require("../connection/mysql_connect");
const { updatePortfolio } = require("../controllers/portfolio.controller");

/*
* Returns all the portfolios
*/
exports.getPortfolios = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      connection.query(
        "SELECT * FROM portfolio",
        (error, data) => {
          // put the connection back in the pool
          connection.release();
          callback(error, data);
        }
      );
    }
  });
};

/*
*  Creates a row with the given portfolio in the database
*/
exports.createPortfolio = (data, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      let insertQuery = connection.format(
        'INSERT INTO portfolio (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)',
        [
          "first_name",
          "last_name",
          "gpa",
          "resume",
          "education",
          data.first_name,
          data.last_name,
          data.gpa,
          data.resume,
          data.education
        ]);

      // Debugging Purpose  
      //console.log(insertQuery);
      connection.query(insertQuery, (error, data) => {
        connection.release();
        callback(error, data);
      });
    }
  });
};

/*
*   Updates the portfolio with the given id and values
*/
exports.updatePortfolio = (req, data, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
        let updateQuery = connection.format(
        `UPDATE portfolio SET ?? = ?, ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE portfolioID = ${req.params.id};`,
        [
            "first_name",
            data.first_name,
            "last_name",
            data.last_name,
            "gpa",
            data.gpa,
            "resume",
            data.resume,
            "education",
            data.education
        ]);
      // Debugging Purpose 
      //console.log(updateQuery);
      connection.query(updateQuery, (error, data) => {
        connection.release();
        callback(error, data);
      });
    }
  });
};

/*
*   Deletes the row of a portfolio with the given ID 
*/
exports.deletePortfolio = (req, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
      let deleteQuery = connection.format(
        `DELETE FROM portfolio WHERE portfolioid = ${req.params.id};`
      );
      // Debugging Purpose
      //console.log(deleteQuery);
      connection.query(deleteQuery, (error, data) => {
        connection.release();
        callback(error, data);
      });
    };
  });
};