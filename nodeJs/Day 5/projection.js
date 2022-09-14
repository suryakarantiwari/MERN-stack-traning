const mysql = require("mysql");
const config = require("./config");

const con = mysql.createConnection(config);

con.connect(function (err) {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  }
  // Our SQL statement
  const sql = `SELECT * FROM departments`;

  con.query(sql, function (err, results, fields) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Table:");
      console.log(results);
    }
  });

  con.end((err) => {
    console.error(err);
  });
});
