import React, { useState } from "react";
import Axios from "axios";
import "../Styles/UserRegister.css";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserRegister() {
  const url = "http://localhost:9000/user-register";

  const d = new Date();
  let genId = d.getTime();
  genId = "CID" + genId;

  const [data, setData] = useState({
    customername: "",
    mobile: "",
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
    if (
      data.customername !== "" &&
      data.mobile !== "" &&
      data.email !== "" &&
      data.password !== ""
    ) {
      Axios.post(url, {
        customerid: genId,
        customername: data.customername,
        mobile: data.mobile,
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
    <div className="div-user">
      <p className="title">Customer Register</p>

      <form className="user-form" onSubmit={(e) => submit(e)}>
        <label htmlFor="customername">Name</label>
        <input
          onChange={(e) => onChange(e)}
          id="customername"
          value={data.customername}
          type="text"
          placeholder="Name"
        />
        <label htmlFor="mobile">Mobile No</label>
        <input
          onChange={(e) => onChange(e)}
          id="mobile"
          value={data.mobile}
          type="number"
          placeholder="MobileNo"
        />
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
        <button className="btn-user">Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
