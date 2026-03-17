import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Layout.css";

const LayoutMain = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <div className="containerMain">
      <header className="topHeader">
        <nav className="container mx-auto">
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
            <li>
              <Link
                to={"/random"}
                className={path === "/random" ? "active" : ""}
              >
                Random
              </Link>
            </li>
            <li>
              <Link
                to={"/render"}
                className={path === "/render" ? "active" : ""}
              >
                Render Test
              </Link>
            </li>
            <li>
              <Link
                to={"/render2"}
                className={path === "/render2" ? "active" : ""}
              >
                Render Test 2
              </Link>
            </li>
            <li>
              <Link to={"/clock"} className={path === "/clock" ? "active" : ""}>
                Clock
              </Link>
            </li>
            <li>
              <Link to={"/todo"} className={path === "/todo" ? "active" : ""}>
                Todo
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
