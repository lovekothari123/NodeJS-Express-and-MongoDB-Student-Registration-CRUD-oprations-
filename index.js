const express = require("express");
const bodyParser = require("body-parser");

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
const databaseConfig = require("./config/database.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(databaseConfig.url, {
    useNewUrlParser: true
  })
  .then(data => {
    console.log("Server Connect to DataBase SucessFully \n\n");
  })
  .catch(err => {
    console.log("Error to connect database " + err);
    process.exit();
  });
require("./app/routes/student.routes")(app);
app.listen(port, () => {
  console.log(`Server Up in with posrt \n\n http://localhost:${port}\n\n`);
});
