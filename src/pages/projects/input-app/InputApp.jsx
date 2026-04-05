import React, { useState } from "react";
import "./InputApp.css";

const initialInputState = {
  a: 0,
  b: 0,
};
const InputApp = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });

  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // we can also make custom resuable handler function like this.
  const handleInutFields = (key, value) => {
    setInputState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  console.log(inputState);
  return (
    <div className="input-app-container ">
      <h1>Result: 0</h1>
      <div>
        <input
          type="number"
          name="a"
          onChange={(e) => handleInutFields("a", e.target.value)}
          value={inputState.a}
        />
        <input
          type="number"
          name="b"
          onChange={(e) => handleInutFields("b", e.target.value)}
          value={inputState.b}
        />
      </div>
      <div>
        <p>Operations:</p>
        <div>
          <button>+</button>
          <button>-</button>
          <button>
            <span>*</span>
          </button>
          <button>/</button>
          <button>clear</button>
        </div>
      </div>
    </div>
  );
};

export default InputApp;
