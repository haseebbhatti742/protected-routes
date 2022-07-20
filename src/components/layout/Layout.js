import React from "react";
import Navbar from "../navbar/Navbar";
import Router from "../../router/Router";
import { useAuthContext } from "../../context/authContext/AuthContextContainer";
import Login from "../login/Login";
import Register from "../register/Register";

function Layout() {
  const { isAuthenticated, route } = useAuthContext();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <Navbar />
          <div className="container p-4">
            <Router />
          </div>
        </div>
      ) : route == "login" ? (
        <Login />
      ) : (
        <Register />
      )}
    </div>
  );
}

export default Layout;
