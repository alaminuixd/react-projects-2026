import React, { useState } from "react";
import CompObj from "../components/comp-obj/CompObj";

const components = {
  photo: function () {
    return <h1>My Photo gallery</h1>;
  },
  video: function () {
    return <h1>My Video gallery</h1>;
  },
};
const names = ["Al amin", "Ruhul Amin", "Sultana", "Abrar Syed"];
const Random = () => {
  const [name, setName] = useState("");
  // setTimeout(() => setName("Al Amin"), 2 * 1000);

  let nameIndex = 0;
  const nameChange = setInterval(() => {
    setName(names[nameIndex]);
    nameIndex++;
  }, 2000);
  if (nameIndex >= names.length) {
    clearInterval(nameChange);
  }

  return (
    <div>
      <h1>My name is {name ? name : "Guest"}</h1>
      <CompObj.CompOne name={"one"} />
      <CompObj.CompTwo bgColor={"blue"} />
      <components.photo />
      <components.video />
    </div>
  );
};

export default Random;
