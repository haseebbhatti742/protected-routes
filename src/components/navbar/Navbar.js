import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext/AuthContextContainer";
import { ROUTES } from "../../router/routes";

function Navbar() {
  const { logout, user } = useAuthContext();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <p class="navbar-brand">Navbar</p>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {ROUTES.map(
            (item) =>
              item.isNavbar &&
              item.isPrivate && (
                <Link to={item.route}>
                  <li class="nav-item active">
                    <p class="nav-link">
                      {item.title} <span class="sr-only">(current)</span>
                    </p>
                  </li>
                </Link>
              )
          )}
        </ul>
        {/* <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}

        <h3>Welcome {user.name}</h3>

        <button
          class="btn btn-warning my-2 my-sm-0 text-white m-4"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
