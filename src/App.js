import React from "react";
import { Home } from "./Component/HomePage";
import AdminRegister from "./Component/AdminRegister";
import AdminLogin from "./Component/AdminLogin";
import UserRegister from "./Component/UserRegister";
import UserLogin from "./Component/UserLogin";
import NavBarMain from "./Component/NavBarMain";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Home/>
    <Router>
      <Routes>
        <Route path="/chris" element={<AdminLogin />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/navbarmain" element={<NavBarMain />} />
      </Routes>
      {/* <NavBarMain /> */}
    </Router>
    </div>
  );
}

export default App;

{/* <React.Fragment>
      <Home />
      <AdminRegister />
      <AdminLogin />
      <UserRegister />
      <UserLogin />
    </React.Fragment> */}