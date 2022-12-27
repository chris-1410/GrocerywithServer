import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../Styles/UserLogin.css";

function UserLogin() {
  const navigate = useNavigate();
  const url = "http://localhost:9000/user-login";
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
        navigate("/navbarmain");
      } else {
        alert("Log in Failed");
      }
    });
  }

  return (
    <div className="div-user-login">
      <p className="title">Customer Login</p>

      <form className="login-form-user" onSubmit={(e) => submit(e)}>
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

        <button className="btn-user-login">Login</button>
      </form>
    </div>
  );
}

export default UserLogin;
