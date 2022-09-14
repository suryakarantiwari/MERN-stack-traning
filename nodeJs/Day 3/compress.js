const { pipeline } = require("stream");
const fs = require("fs");
const zlib = require("zlib");

pipeline(
  fs.createReadStream("filewrite"),
  zlib.createGzip(),
  fs.createWriteStream("myfile.gz"),
  (err) => {
    if (err) {
      console.error("Compression got a issue", err);
    } else {
      console.log("Compressed Successfully!!");
    }
  }
);
