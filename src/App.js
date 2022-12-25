import React from "react";
import { Home } from "./Component/HomePage";
// import AdminRegister from "./Component/AdminRegister";
// import AdminLogin from "./Component/AdminLogin";
// import UserRegister from "./Component/UserRegister";
// import UserLogin from "./Component/UserLogin";
import NavBarMain from "./Component/NavBarMain";

function App() {
  return (
    <React.Fragment>
      <Home />
      {/* <AdminRegister />
      <AdminLogin />
      <UserRegister />
      <UserLogin /> */}
      <NavBarMain />
    </React.Fragment>
  );
}

export default App;
