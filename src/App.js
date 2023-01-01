import React from "react";
import { Home } from "./Component/HomePage";
import AdminMainComp from "./Component/AdminMainComp";
import UserMainComp from "./Component/UserMainComp";
import NavBarMain from "./Component/NavBarMain";
import AdminView from "./Component/AdminView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRegister from "./Component/AdminRegister";
import UserRegister from "./Component/UserRegister";

// import { HomeScreen } from "./Component/HomeScreen";

function App() {
  return (
    <div>
      {/* <HomeScreen path="/home"/> */}
      <Home path="/main" />
      <ToastContainer />
      <Router>
        <Routes>
          {/* <Route path="/admin" element={<AdminMainComp />} /> */}
          {/* <Route path="/abc" element={<AdminRegister />} /> */}
          {/* <Route path="/def" element={<UserRegister />} /> */}
          {/* <Route path="/adminlogin" element={<AdminView />} /> */}
          {/* <Route path="/userLogin" element={<UserMainComp />} /> */}
          {/* <Route path="/navbarmain" element={<NavBarMain />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
{
  /* <Route path="/treat" element={<Products />} /> */
}
export default App;
