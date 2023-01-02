const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
const PORT = 9000;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});

// new user signup
app.post("/signup", (req, res) => {
  const user = req.body;
  console.log("api called");
  let selectQuery = `select count(email) from users where email='${user.email}'`;
  pool.query(selectQuery, (err, result) => {
    if (!err) {
      console.log("inside if");
      if (result.rows[0].count == 0) {
        let insertQuery = `insert into users(name, email, password, role)
                          values('${user.name}', '${user.email}', '${user.password}', 'user') `;
        pool.query(insertQuery, (err, result1) => {
          if (!err) {
            res.send({ exists: "False", insert: "Insertion was successful" });
          } else {
            console.log(err.message);
          }
        });
      } else {
        console.log("inside else");
        res.send({
          exists: "True",
        });
      }
    } else {
    }
  });
  pool.end;
});

//signin verification
app.post("/signin", (req, res) => {
  const user = req.body;
  const email = user.email;
  const password = user.password;
  let passQuery = `Select password,role from users where email = '${email}'`;
  pool.query(passQuery, (err, result1) => {
    console.log(result1.rows);
    if (result1.rows != 0) {
      if (result1.rows[0].password == password) {
        console.log(result1.rows);
        res.send({
          success: "True",
          role: result1.rows[0].role,
        });
      } else {
        // console.log(result1.rows);
        res.send({
          sucess: "False",
        });
      }
    } else {
      // console.log(result1.rows);
      res.send({
        sucess: "False",
      });
    }
  });
});

//show products
app.get("/products-list", (req, res) => {
  let searchQuery = `Select * from products`;
  pool.query(searchQuery, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err.message);
    }
  });
});

//show orders
app.get("/orders-list", (req, res) => {
  let searchQuery = `Select * from orders_summary`;
  pool.query(searchQuery, (err, result) => {
    if (!err) {
      res.send(result.rows);
    } else {
      console.log(err.message);
    }
  });
});

//update product quantity
app.post("/update-quantity", (req, res) => {
  let searchQuery = `update products set quantity='${req.body.productquantity}' where product_id='${req.body.productid}'`;
  pool.query(searchQuery, (err, result) => {
    if (!err) {
      res.send("Product quantity updated Check in DB");
    } else {
      console.log(err.message);
    }
  });
});

//confirm-orders
app.post("/confirm-orders", (req, res) => {
  const orders = req.body.orders;
  const total_price = req.body.total_price;
  const user_id = req.body.user_id;
  const order_id = Math.floor(Math.random() * 1200);
  let insertQuery = `insert into orders_summary (order_id,total_price,order_date,user_id) values ('${order_id}','${total_price}',CURRENT_DATE,'${user_id}')`;
  pool.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("inserted");
    } else {
      console.log(err.message);
    }
  });

  for (let i = 0; i < orders.length; i++) {
    let searchQuery = `insert into orders (order_id,product_id,quantity,price,order_date,user_id) values ('${order_id}','${orders[i][0]}','${orders[i][1]}','${orders[i][2]}',CURRENT_DATE,'${user_id}')`;
    pool.query(searchQuery, (err, result) => {
      if (!err) {
        // res.send("inserted");
      } else {
        console.log(err.message);
      }
    });
  }
});

//give user-id to the frontend
app.post("/user-id", (req, res) => {
  const email = req.body.email;
  let searchQuery = `Select count(email) from users where email = '${email}'`;
  pool.query(searchQuery, (err, result) => {
    if (!err) {
      if (result.rows[0].count == 1) {
        let passQuery = `Select user_id from users where email = '${email}'`;
        pool.query(passQuery, (err, result1) => {
          console.log(result1);
          let user_id = result1.rows[0].user_id;
          // console.log(user_id);
          res.send({
            success: user_id,
          });
        });
      }
    }
  });
});

