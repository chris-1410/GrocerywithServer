import React from "react";
import AdminLogin from "./AdminLogin";
import "../Styles/AdminMain.css"

export default function AdminMainComp() {
  return (
    <div className="div-admin-flex">
      <div className="div-register">
        {/* <AdminRegister /> */}
      </div>
      <div className="div-register-login">
        <AdminLogin />
        {/* <a id="admin-reg" href="/abc" >Click to Register</a> */}
      </div>
    </div>
  );
}
