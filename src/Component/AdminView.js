import React, { useState, useEffect } from "react";
import ShowOrders from "./ShowOrders";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/Adminview.css";

function AdminView() {

  const navigate = useNavigate();
  
  function logout() {
    navigate("/");
    console.log("Clicked Logout !!!");
  }
  const url = "http://localhost:9000/update-quantity";

  const [data, setData] = useState({
    productid: "",
    productquantity: "",
  });

  function onChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    Axios.put(url, {
      productid: data.productid,
      productquantity: data.productquantity,
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="form-container">
      <nav className="admin-nav">
        <h2>Admin Portal</h2>
        <button className="btn-logout-home" onClick={logout}>
          Logout
        </button>
      </nav>
      <form className="update-quantity" onSubmit={(e) => submit(e)}>
        <br />
        <label>Product ID</label>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          id="productid"
          value={data.productid}
        />

        <label>Product Quantity</label>
        <input
          onChange={(e) => onChange(e)}
          type="number"
          id="productquantity"
          value={data.productquantity}
        />

        <input type="submit" />
      </form>
      <br />
      <div>
        <ShowOrders />
      </div>
    </div>
  );
}

export default AdminView;
