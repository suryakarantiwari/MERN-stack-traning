const mysql = require("mysql");
const config = require("./config");

const con = mysql.createConnection(config);

con.connect(function (err) {
  if (err) {
    console.log("Connection Error...");
    console.error(err);
  }
  // Our SQL statement
  const sql = `INSERT INTO departments(deptID,deptName, city)
                 VALUES(1,'Accounting', 'NEWYORK'), (2, 'RESEARCH','DALLAS'), (3,'SALES','CHICAGO'),(4,'OPERATIONS','BOSTON'),(5, 'R&D','PUNE')`;

  con.query(sql, function (err, results, fields) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Row inserted successfully....");
    }
  });

  con.end((err) => {
    console.error(err);
  });
});
