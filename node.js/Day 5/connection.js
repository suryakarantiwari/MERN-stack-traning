const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root@localhost",
  password: "Blaze@12345",
  database: "hr_db",
});

conn.connect(function (err) {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  } else {
    console.log("Successfully connected....");
  }
});

conn.end(function (err) {
  if (err) {
    console.error(err);
  }
});
