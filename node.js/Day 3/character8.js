const fs = require("fs");
const readable = fs.createReadStream("fileWrite");
var data = "";
var chunck;
vovel = "aeiouAEIOU";
vovel = vovel.split("");
count_vovel = 0;
count_conson = 0;

readable.on("readable", function () {
  chunck = " ";
  while (chunck != null) {
    chunck = readable.read(1);
    var p = `${chunck}`;
    if (vovel.indexOf(p) != -1) {
      count_vovel++;
    } else {
      count_conson++;
    }
  }
});

readable.on("end", function () {
  console.log("Vovel Count ", count_vovel);
  console.log("Consonent Count ", count_conson);
  var percentage = (count_vovel / (count_conson + count_vovel)) * 100;
  console.log(`Percentage of vovel %i%`, percentage);
  percentage = (count_conson / (count_conson + count_vovel)) * 100;
  console.log(`Percentage of Consonent %i%`, percentage);
});
