import React from "react";
import { useAuthContext } from "../context/authContext/AuthContextContainer";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../router/routes";
import Login from "../components/login/Login";

function Router() {
  const { isAuthenticated } = useAuthContext();
  return (
    <Routes>
      {ROUTES.map((route) =>
        route?.isPrivate ? (
          isAuthenticated ? (
            <Route
              key={route.id}
              element={route.component}
              path={route.route}
            />
          ) : (
            <Route path="*" element={<Login />} />
          )
        ) : (
          <Route key={route.id} element={route.component} path={route.route} />
        )
      )}

      <Route path="*" element={<>Page Restricted</>} />
    </Routes>
  );
}

export default Router;
