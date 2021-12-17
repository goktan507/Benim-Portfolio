const db = require("../config/db.config");
const mySqlConnect = require("../connection/mysql_connect");

/*
* Returns all the skills
*/
exports.getSkills = (req, callback) => {
  let error = false;
  mySqlConnect.acquire((error, connection) => {
    // failed to acquire connection from pool
    if (error) {
      callback(error, null);
    } else {
      connection.query(
        "SELECT * FROM skills",
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
*  Creates a row with the given skills in the database
*/
exports.createSkills = (data, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
      let insertQuery = connection.format(
        'INSERT INTO skills (??, ??, ??) VALUES (?, ?, ?)',
        [
          "experience",
          "skill_description",
          "portfolio_portfolioid",
          data.experience,
          data.skill_description,
          data.portfolio_portfolioID,
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
exports.updateSkills = (req, data, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      // The ?? operator puts the id in backtics so the MySQL server won't see the values as Strings
      let updateQuery = connection.format(
        `UPDATE skills SET ?? = ?, ?? = ?, ?? = ? WHERE skillsID = ${req.params.id};`,
        [
          "experience",
          data.experience,
          "skill_description",
          data.skill_description,
          "portfolio_portfolioid",
          data.portfolio_portfolioID
        ]
      );
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
exports.deleteSkills = (req, callback) => {
  mySqlConnect.acquire((error, connection) => {
    if (error) {
      callback(error, null);
    } else {
      // 
      let deleteQuery = connection.format(
        `DELETE FROM skills WHERE skillsid = ${req.params.id};`
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