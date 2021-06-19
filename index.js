const express = require("express");
const path = require("path");
const app = express();
const port = 7000;
// fetching the connected database
const db = require("./config/mongoose");

// setting the view engine as ejs and also the views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setting up the middleware, so that the object body is created in the request made by client
app.use(express.urlencoded());

app.use("/", require("./routes"));

// Running the server
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server on port: ", port);
    return;
  }

  console.log("Server is up and running on port: ", port);
});
