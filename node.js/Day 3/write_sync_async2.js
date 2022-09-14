var fs = require("fs");

const { Console } = require("console");

fs.writeFile("fileWrite", "Writing the file asychronously", (err) => {
  if (err) {
    console.log("Error !! Snap ", err);
  } else {
    console.log("Wrote Successfully");
  }
});

try {
  fs.writeFileSync("filewrite", " Writing In File Synchronoulsy ");
  console.log("Wrote Successfully");
} catch (err) {
  console.log("Error Didnt able to wrtie in the file", err);
}
