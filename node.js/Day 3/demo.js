const { Console } = require("console");
const fs = require("fs");
var read = fs.createReadStream("filewrite");
var write = fs.createWriteStream("fileWrite");
read.pipe(write);
console.log("piping successfull");
