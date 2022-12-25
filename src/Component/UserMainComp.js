import React from "react";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";
import "../Styles/UserMainComp.css";

export default function UserMainComp() {
  return (
    <div className="div-user-flex">
      <div>
        <UserRegister />
      </div>
      <div>
        <UserLogin />
      </div>
    </div>
  );
}
