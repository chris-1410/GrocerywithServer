import React from "react";
import AdminRegister from "./AdminRegister";
import AdminLogin from "./AdminLogin";
import "../Styles/AdminMain.css"

export default function AdminMainComp() {
  return (
    <div className="div-admin-flex">
      <div className="div-register">
        <AdminRegister />
      </div>
      <div className="div-register-login">
        <AdminLogin />
      </div>
    </div>
  );
}
