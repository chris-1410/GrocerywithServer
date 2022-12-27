import React, { useState } from "react";
import Axios from "axios";
import "../Styles/AdminRegister.css";

function AdminRegister() {
  const url = "http://localhost:9000/admin-register";
  const [data, setData] = useState({
    adminname: "",
    mobile: "",
    email: "",
    password: "",
  });

  function onChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      adminname: data.adminname,
      mobile: data.mobile,
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <div className="div-admin">
      <p className="title">Admin Register</p>
      <form className="admin-form" onSubmit={(e) => submit(e)}>
        <label htmlFor="adminname">Name</label>
        <input
          onChange={(e) => onChange(e)}
          id="adminname"
          value={data.adminname}
          type="text"
        />

        <label htmlFor="mobile">Mobile No</label>
        <input
          onChange={(e) => onChange(e)}
          id="mobile"
          value={data.mobile}
          type="number"
        />

        <label htmlFor="email">Email Id</label>
        <input
          onChange={(e) => onChange(e)}
          id="email"
          value={data.email}
          type="text"
        />

        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => onChange(e)}
          id="password"
          value={data.password}
          type="password"
        />

        <button className="btn-register">Register</button>
      </form>
    </div>
  );
}

export default AdminRegister;
