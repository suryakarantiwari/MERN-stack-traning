const mysql = require("mysql");
const config = require("./config");

const con = mysql.createConnection(config);

con.connect(function (err) {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  }
  // Our DML statement
  const sql = `UPDATE departments
    SET city = ?
    WHERE deptName = ?`;

  con.query(sql, ["TEXAS", "ACCOUNTING"], function (err, results, fields) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Updation complete!");
      console.log("Row(s) affected :" + results.affectedRows);
    }
  });

  con.end((err) => {
    console.error(err);
  });
});
