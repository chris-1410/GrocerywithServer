import React from "react";
import { Home } from "./Component/HomePage";
import AdminMainComp from "./Component/AdminMainComp";
import UserMainComp from "./Component/UserMainComp";
import NavBarMain from "./Component/NavBarMain";
import AdminView from "./Component/AdminView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div>
      <Home />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminMainComp />} />
          <Route path="/adminlogin" element={<AdminView />} />
          <Route path="/userLogin" element={<UserMainComp />} />
          <Route path="/navbarmain" element={<NavBarMain />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
