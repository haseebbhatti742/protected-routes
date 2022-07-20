import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL_LOGIN } from "../../constants";
import { useAuthContext } from "../../context/authContext/AuthContextContainer";
import { ROUTES } from "../../router/routes";

function Login() {
  const navigate = useNavigate();
  const { authenticateUser, setRoute } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (username, password) => {
    let res = await getLogin(username, password);
    if (res.status.includes("failure")) alert(res.message);
    else authenticateUser(res.token, res.user);
  };

  const getLogin = (username, password) => {
    return new Promise((resolve) => {
      fetch(API_URL_LOGIN, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-type": "application/json;charset=utf-8" },
      })
        .then((res) => res.json())
        .then((res) => resolve(res));
    });
  };

  return (
    <div className="container p-4 col-lg-3 col-md-4 col-sm-12">
      <h3> Login Here </h3>
      <hr />
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
        onClick={() => login(username, password)}
      >
        Login
      </button>

      <Link
        to={ROUTES.find((item) => item.title === "Register")?.route || "*"}
        onClick={() => setRoute("register")}
      >
        New User ? Register Here
      </Link>
    </div>
  );
}

export default Login;
