const { Console } = require("console");
const fs = require("fs");
var data = "";

const readstream = fs.createReadStream("textfile");
readstream.setEncoding("UTF8");

readstream.on("data", function (chunk) {
  data += chunk;
});

readstream.on("end", function () {
  console.log(data);
});

readstream.on("error1", function (err) {
  console.log(err);
});

console.log("Ended");
