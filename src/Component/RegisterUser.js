import React, { useState } from "react";
import Axios from "axios";
import "../Styles/RegisterUser.css";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const navigate = useNavigate();
  function loginnavigate() {
    navigate("/");
    console.log("Navigate to Login Screen !!!");
  }
  const url = "http://localhost:9000/signup";

  const [data, setData] = useState({
    customername: "",
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  const showToastMessage = () => {
    toast.success("Registration Successfull !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Password Must be 8 characters Long !!!  1 Uppercase 1 Lowercase 1 Number and a special Character "
      );
    }
  };

  function onChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function submit(e) {
    e.preventDefault();
    if (data.customername !== "" && data.email !== "" && data.password !== "") {
      Axios.post(url, {
        name: data.customername,
        email: data.email,
        password: data.password,
      }).then((res) => {
        showToastMessage();
        console.log(res.data);
      });
    } else {
      toast.error("Please enter all details !", {
        position: toast.POSITION.TOP_CENTER,
      });
      e.preventDefault();
    }
  }

  return (
    <div className="container">
      <form className="user-form" onSubmit={(e) => submit(e)}>
        <i class="fas fa-paper-plane"> Register</i>
        <div className="input-group">
          <label htmlFor="customername">Name</label>
          <input
            onChange={(e) => onChange(e)}
            id="customername"
            value={data.customername}
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Id</label>
          <input
            onChange={(e) => {
              onChange(e);
              validateEmail(e);
            }}
            type="email"
            id="email"
            value={data.email}
            placeholder="Email"
            required
          />
          <span style={{ fontWeight: "bold", color: "red" }}>{emailError}</span>{" "}
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              onChange(e);
              validate(e.target.value);
            }}
            type="password"
            id="password"
            value={data.password}
            placeholder="Password"
            required
          />
          {errorMessage === "" ? null : (
            <span style={{ fontWeight: "bold", color: "red" }}>
              {errorMessage}
            </span>
          )}{" "}
        </div>
        <input class="button" type="submit" value="Register" name="Register" />

        <button className="btn-user-login" onClick={loginnavigate}>
          Login
        </button>
      </form>
    </div>
  );
}

export default RegisterUser;
