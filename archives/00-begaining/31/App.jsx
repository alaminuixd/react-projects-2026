import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div style={{ width: "100%", maxWidth: "1260px", margin: "auto" }}>
      <h1>Hello React</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        suscipit, harum maxime, dignissimos perferendis ab vel sed blanditiis
        eveniet magni accusamus nam nulla iste a doloremque eaque impedit
        voluptatibus dolor.
      </p>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button text="Reset" varient="warning" size="small" />
        <Button text="Submit" varient="primary" size="medium" />
        <Button text="Cancle" varient="error" size="large" />
      </div>
    </div>
  );
}

export default App;
