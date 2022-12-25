import React, { useState } from "react";
import Axios from "axios";
import "../Styles/AdminLogin.css";

function AdminLogin() {
  const url = "http://localhost:9000/admin-login";
  const [data, setData] = useState({
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
      email: data.email,
      password: data.password,
    }).then((res) => {
      if (res.data.success == "True") {
        let role = res.data.role;
        alert("Logged in Successfully");
        //navigate("/Admin");
      } else {
        alert("Log in Failed");
      }
    });
  }

  return (
    <div className="div-admin-login">
      <p className="title">Admin Login</p>

      <form className="login-form-admin" onSubmit={(e) => submit(e)}>
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

        <button className="btn-login">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
