const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root@localhost",
  password: "Blaze@12345",
  database: "hr_db",
});

con.connect(function (err) {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  }
  // Our DDL statement
  const todos = `CREATE TABLE IF NOT EXISTS departments (
        deptID         int PRIMARY KEY AUTO_INCREMENT,
        deptName        varchar(20) NOT NULL,
        city           varchar(10)  NOT NULL
    )`;

  con.query(todos, function (err, results, fields) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Table created successfully....");
    }
  });

  con.end((err) => {
    console.error(err);
  });
});
