import React, { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { menus, childrenMap } from "../assets/menu.data";
import MenuItem from "../components/MenuItem";
import { buildMenuTree } from "../utils/buildMenuTree";
import "./Layout.css";

const LayoutMain = () => {
  const location = useLocation();
  const path = location.pathname;
  // console.log(path);
  // menu tree
  const menuTree = useMemo(() => buildMenuTree(menus, childrenMap), []);
  // console.log(menuTree.map((m) => m.text));
  return (
    <div className="containerMain">
      <header className="topHeader">
        <nav className="container mx-auto">
          <Link to={"/"}>
            <h3>Brand Logo</h3>
          </Link>
          <ul>
            {menuTree.map((item) => (
              <MenuItem key={item.id} item={item} depth={0} />
            ))}
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
