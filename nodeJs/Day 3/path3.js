const { basename } = require("path");
var path = require("path");
var os = require("os");
const filename =
  "C:\\Users\\indranil.champati\\Document\\Module3\\Day3\\read_syn_asyc2.js";
dname = path.dirname(filename);
bname = path.basename(filename);
ext = path.extname(filename);

console.log("dirname : ", dname);
console.log("basename : ", bname);
console.log("extension : ", ext);

console.log("Hostname : ", os.hostname());
console.log("OS release number : ", os.release());
console.log("platform on which node js is compiled", os.platform());

console.log("memory free in the system", os.freemem());
console.log("total memory ", os.totalmem());
var cpu_info = os.cpus();
console.log("number of cpu", cpu_info.length);
console.log("modal ", cpu_info[1].model);
console.log("speed", cpu_info[1].speed);
