import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../Styles/UserLogin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  const navigate = useNavigate();
  const url = "http://localhost:9000/user-login";

  const showToastMessage1 = () => {
    toast.success("Login failed !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastMessage = () => {
    toast.success("Login Successfull !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

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
      function toastMessage() {
        if (res.data.success == "True") {
          showToastMessage();
          console.log(res)
        } else if (res.data.success == "False") {
          showToastMessage1();
        }
      }
      toastMessage();
      if (res.data.success == "True") {
        let role = res.data.role;
        alert("Logged in Successfully");
        navigate("/navbarmain");
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
