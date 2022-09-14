const { Console } = require("console");
const fs = require("fs");

try {
  console.log("Synchronous Way Of Reading the file ");
  var data = fs.readFileSync("textfile", "utf8");
} catch (err) {
  console.log(err);
}

console.log(data);
console.log(typeof data);
