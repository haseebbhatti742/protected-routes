import React, { useContext, useEffect, useState } from "react";
import { AuthContext, AuthContextProvider } from "./AuthContext";
import { AUTH_TOKEN } from "../../constants";
import { useNavigate } from "react-router-dom";

function AuthContextContainer({ children }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(undefined);
  const [route, setRoute] = useState("login");

  useEffect(() => {
    !localStorage.getItem(AUTH_TOKEN) ? logout() : setAuthenticated();
  }, [localStorage.getItem(AUTH_TOKEN)]);

  const setAuthenticated = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  const authenticateUser = (token, user = undefined) => {
    localStorage.setItem(AUTH_TOKEN, token);
    setUser(user);
    setAuthenticated();
  };

  const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setIsAuthenticated(false);
    setUser(undefined);
    navigate("/login");
  };

  const contextValues = {
    authenticateUser,
    isAuthenticated,
    logout,
    route,
    setRoute,
    user,
  };

  return (
    <AuthContextProvider value={contextValues}>{children}</AuthContextProvider>
  );
}

export default AuthContextContainer;

export const useAuthContext = () => useContext(AuthContext);
