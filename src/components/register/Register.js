import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext/AuthContextContainer";
import { Link, Navigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import { API_URL_REGISTER } from "../../constants";

function Register() {
  const { isAuthenticated, setRoute } = useAuthContext();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = (name, username, password) => {
    fetch(API_URL_REGISTER, {
      method: "POST",
      body: JSON.stringify({ name, username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
      });
  };

  const renderForm = () => (
    <div className="container p-4 col-lg-3 col-md-4 col-sm-12">
      <h3> Register Here </h3>
      <hr />

      <input
        className="form-control mb-4"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-4"
        placeholder="Username or Email"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="form-control mb-4"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="btn btn-success col-12"
        onClick={() => register(name, username, password)}
      >
        Register
      </button>

      <Link
        to={ROUTES.find((item) => item.title === "Login")?.route || "*"}
        onClick={() => setRoute("login")}
      >
        Already Registered ? Login Here
      </Link>
    </div>
  );

  return <div>{!isAuthenticated && renderForm()}</div>;
}

export default Register;
