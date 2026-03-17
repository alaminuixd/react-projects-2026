import React from "react";

function Layout(props) {
  console.log(props);
  return (
    <div>
      <header style={{ backgroundColor: "#FCC" }}>
        <nav>
          <h3>Brand Logo</h3>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </nav>
      </header>
      <main style={{ padding: "1rem 0" }}>{props.children}</main>
      <footer style={{ backgroundColor: "#FCC" }}>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  );
}

export default Layout;
