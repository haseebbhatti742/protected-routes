import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Home from "../components/home/Home";
import Contact from "../components/contact/Contact";

export const ROUTES = [
  {
    id: 1,
    route: "/login",
    component: <Login />,
    title: "Login",
    isNavbar: false,
    isPrivate: false,
  },
  {
    id: 2,
    route: "/register",
    component: <Register />,
    title: "Register",
    isNavbar: false,
    isPrivate: false,
  },
  {
    id: 3,
    route: "/",
    component: <Home />,
    title: "Home",
    isNavbar: true,
    isPrivate: true,
  },
  {
    id: 4,
    route: "/contact",
    component: <Contact />,
    title: "Contact Us",
    isNavbar: true,
    isPrivate: true,
  },
];
