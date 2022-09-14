const { pipeline } = require("stream");
const fs = require("fs");
const zlib = require("zlib");

pipeline(
  fs.createReadStream("filewrite"),
  zlib.createGzip(),
  fs.createWriteStream("fileWrite"),
  (err) => {
    if (err) {
      console.error("pipeline failed", err);
    } else {
      console.log("pipeline succeeded !!");
    }
  }
);
