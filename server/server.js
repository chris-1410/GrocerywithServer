var sql = require("mssql");
const bodyParser = require("body-parser");
var cors = require("cors");

// connect to server
var express = require("express");
var app = express();
app.use(cors());
app.use(bodyParser.json());

// config for your database
var sqlConfig = {
  user: "Narendra",
  password: "Naren@123",
  server: "sql-server-jman-narendra.database.windows.net",
  database: "sql-db-jman-narendra",
  options: {
    encrypt: true, // for azure
  },
};

// display all available products to user
app.get("/products-list", function(req, res) {
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query("select * from Products", function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset.recordset);
      });
  })();
});

//display all received orders to admin
app.get("/orders-list", function(req, res) {
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query("select * from Orderssummary", function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset.recordset);
      });
  })();
});

//put (update) ProdtuctQuantity by admin
app.put("/update-quantity", function(req, res) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `update products set Quantity='${req.body.productquantity}' where Id='${req.body.productid}'`,
        function(err, recordset) {
          console.log(recordset);
          if (err) console.log(err);
          res.send("Product quantity updated Check in DB");
        }
      );
  })();
});

//new user register
app.post("/user-register", function(req, res) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `insert into Customers values ('${req.body.customerid}', '${req.body.customername}', '${req.body.mobile}', '${req.body.email}', '${req.body.password}')`,
        function(err, recordset) {
          console.log(recordset);
          if (err) console.log(err);
          res.send("New User Registered Check in DB");
        }
      );
  })();
});

//user login verification
app.post("/user-login", function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `Select count(emailid) as count from customers where emailid = '${email}'`,
        function(err, recordset) {
          if (!err) {
            console.log(recordset.recordset[0].count);
            if (recordset.recordset[0].count == 1) {
              let passQuery = `Select password from customers where emailid = '${email}'`;

              pool.query(passQuery, (err, result) => {
                let passdb = result.recordset[0].password;
                console.log(result);
                if (passdb == password) {
                  res.send({
                    success: "True",
                    password: result.recordset[0].password,
                  });
                } else {
                  res.send({
                    success: "False",
                  });
                }
              });
            }
          }
        }
      );
  })();
});

//new admin register
app.post("/admin-register", function(req, res) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type"
  );
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `insert into admin values ('${req.body.adminname}', '${req.body.mobile}', '${req.body.email}', '${req.body.password}')`,
        function(err, recordset) {
          console.log(recordset);
          if (err) console.log(err);
          res.send("New Admin Registered Check in DB");
        }
      );
  })();
});

//admin login authentication
app.post("/admin-login", function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `Select count(emailid) as count from admin where emailid = '${email}'`,
        function(err, recordset) {
          if (!err) {
            console.log(recordset.recordset[0].count);
            if (recordset.recordset[0].count == 1) {
              let passQuery = `Select password from admin where emailid = '${email}'`;

              pool.query(passQuery, (err, result) => {
                let passdb = result.recordset[0].password;
                console.log(result.recordset[0]);
                if (passdb == password) {
                  res.send({
                    success: "True",
                    password: result.recordset[0].password,
                  });
                } else {
                  res.send({
                    success: "False",
                  });
                }
              });
            }
          }
        }
      );
  })();
});

// Confirm Orders POST API
app.post("/confirm-orders", function(req, res) {
  const orders = req.body.orders;
  const orderId = req.body.orderId;
  const customerId = req.body.customerId;
  (async function() {
    let pool = await sql.connect(sqlConfig);
    for (let i = 0; i < orders.length; i++) {
      let result = await pool
        .request()
        .query(
          `insert into Orders values ('${orderId}', '${orders[i][0]}', '${orders[i][1]}', '${orders[i][2]}', '${orders[i][3]}', '${customerId}')`,
          function(err, recordset) {
            console.log(recordset);
            if (err) console.log(err);
            // res.send("Row iserted");
          }
        );
    }
  })();
});

//orders-summary
app.post("/orders-summary", function(req, res) {
  const orderId = req.body.orderId;
  const totalPrice = req.body.totalPrice;
  const customerId = req.body.customerId;
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `insert into OrdersSummary values ('${orderId}',  '${totalPrice}','${customerId}')`,
        function(err, recordset) {
          console.log(recordset);
          if (err) console.log(err);
          res.send("Row iserted");
        }
      );
  })();
});

//customer-id
app.post("/customer-id", function(req, res) {
  const email = req.body.email;
  (async function() {
    let pool = await sql.connect(sqlConfig);
    let result = await pool
      .request()
      .query(
        `Select count(emailid) as count from customers where emailid = '${email}'`,
        function(err, recordset) {
          if (!err) {
            console.log(recordset.recordset[0].count);
            if (recordset.recordset[0].count == 1) {
              let passQuery = `Select customerid from customers where emailid = '${email}'`;

              pool.query(passQuery, (err, result) => {
                let customerid = result.recordset[0].customerid;
                console.log(result.recordset[0]);
                if (true) {
                  res.send({
                    success: customerid,
                  });
                }
              });
            }
          }
        }
      );
  })();
});

var server = app.listen(9000, function() {
  console.log("Server is running on localhost:9000");
});
