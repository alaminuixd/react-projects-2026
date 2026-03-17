import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

const LayoutMain = () => {
  return (
    <div>
      <header style={{ backgroundColor: "#FCC" }}>
        <nav>
          <h3>Brand Logo</h3>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Help
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>

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
