const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("./public")); //before this CSS was not working and page was just showing things but not working

app.get("/", function (req, res) {
  // res.status(201).send("<h1>Hello Express World!</h1>");
  res.sendFile(path.resolve(__dirname, "./future_value/index.html"));
});

app.listen(port, function () {
  console.log(`Express app listening on port ${port}...`);
});
