const local = require("repl");
local.start("$ ");

process.on("exit", (code) => {
  console.log("Exiting REPL...", code);
});
