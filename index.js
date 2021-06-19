const express = require("express");
const path = require("path");
const app = express();
const port = 7000;
// setting the view engine as ejs and also the views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./routes"));

// Running the server
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server on port: ", port);
    return;
  }

  console.log("Server is up and running on port: ", port);
});
