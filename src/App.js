import React from "react";
import { Home } from "./Component/HomePage";
import AdminMainComp from "./Component/AdminMainComp";
import UserMainComp from "./Component/UserMainComp";
import NavBarMain from "./Component/NavBarMain";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminMainComp />} />
          <Route path="/userLogin" element={<UserMainComp />} />
          <Route path="/navbarmain" element={<NavBarMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{
  /* <React.Fragment>
      <Home />
      <AdminRegister />
      <AdminLogin />
      <UserRegister />
      <UserLogin />
    </React.Fragment> */
}
