import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const LayoutMain = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <div>
      <header style={{ backgroundColor: "#FCC" }}>
        <nav>
          <h3>Brand Logo</h3>
          <ul>
            <li>
              <Link to={"/"} className={path === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className={path === "/about" ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link to={"/help"} className={path === "/help" ? "active" : ""}>
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: "1rem 0" }}>{<Outlet />}</main>
      <footer style={{ backgroundColor: "#FCC" }}>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
};

export default LayoutMain;
