import React, { useState } from "react";
import Axios from "axios";
import "../Styles/UserRegister.css";

function UserRegister() {
  const url = "http://localhost:9000/user-register";
  const d = new Date();
  let genId = d.getTime();
  genId = 'CID'+genId;

  const [data, setData] = useState({
    customername: "",
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
      customerid : genId,
      customername: data.customername,
      mobile: data.mobile,
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });
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
        />

        <label htmlFor="mobile">Mobile No</label>
        <input
          onChange={(e) => onChange(e)}
          id="mobile"
          value={data.mobile}
          type="text"
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

        <button className="btn-user" >Register</button>
      </form>
    </div>
  );
}

export default UserRegister;
