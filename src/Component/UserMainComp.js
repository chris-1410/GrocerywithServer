import React from "react";
import UserLogin from "./UserLogin";
import "../Styles/AdminMain.css"

export default function UserMainComp() {
  return (
    <div className="div-user-flex">
      <div>
        {/* <UserRegister /> */}
      </div>
      <div>
        <UserLogin />
        <a id="user-reg" href="/def" >Click to Register</a>
      </div>
    </div>
  );
}
