import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { menus, childrenMap } from "../assets/data";
import MenuItem from "../components/MenuItem";
import { buildMenuTree } from "../utils/buildMenuTree";
import "./Layout.css";

const LayoutMain = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  // menu tree
  const menuTree = useMemo(() => buildMenuTree(menus, childrenMap), []);
  return (
    <div className="containerMain">
      <header className="topHeader">
        <nav className="container mx-auto">
          <Link to={"/"}>
            <h3>Brand Logo</h3>
          </Link>
          <ul>
            <li>
              <Link to={"/"} className={path === "/" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                className={path === "/products" ? "active" : ""}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to={"/dragable"}
                className={path === "/dragable" ? "active" : ""}
              >
                Dragable
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: "1rem 0" }} className="mainArea">
        {<Outlet />}
      </main>
      <footer style={{ backgroundColor: "#FCC" }}>
        <ul className="flex justify-between">
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
};

export default LayoutMain;
