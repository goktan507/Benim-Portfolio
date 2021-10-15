const express = require("express");
const mySqlConnect = require("./connection/mysql_connect");
const app = express();
const portfolioRoutes = require("./routes/portfolio.routes");
const skillsRoutes = require("./routes/skills.routes");
mySqlConnect.init();

// prepare to parse request body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// setting up the use of each routes for the models
app.use("/", portfolioRoutes);
app.use("/", skillsRoutes);


app.listen(3000, () => {
  console.log("listening...");
});