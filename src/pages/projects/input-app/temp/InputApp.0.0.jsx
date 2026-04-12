/**
 * DONE: Handle user input fields
 * TODO: Handle operations
 * TODO: Handle a list of history
 * TODO: Render history list
 * TODO: Restor the history
 */
import React, { useEffect, useState } from "react";
import "./InputApp.css";

const initialInputState = {
  a: 0,
  b: 0,
};
const InputApp = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  console.log(typeof result);

  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };
  // we can also make custom resuable handler function like this.
  const handleInutFields = (key, value) => {
    setInputState((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // This one is using object value
  const handleInputByObject = (obj) => {
    setInputState((prev) => {
      console.log(prev);
      return {
        ...prev,
        ...obj,
      };
    });
  };
  // handle clear input
  const handleClearInput = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };
  // handle arithmetic operation
  const handleArithmeticOperation2 = (operator) => {
    setResult((prev) => {
      const { a, b } = inputState;
      switch (operator) {
        case "+":
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        case "/":
          return a / b;
        default:
          0;
      }
    });
  };
  // Using function constructor (this one is vulnerable)
  const handleArithmeticOperation1 = (operator) => {
    const f = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b}`,
    );
    console.log(f(operator));
    setResult(f(operator));
  };
  // The best one scalable
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const handleArithmeticOperation = (operator) => {
    const a = Number(inputState.a);
    const b = Number(inputState.b);
    setResult(operations[operator](a, b));
  };

  const oper = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  const handleOperation = (operator) => {
    const { a, b } = inputState;

    const fn = oper[operator];
    if (!fn) return;

    setResult(oper[operator](a, b));
  };

  /*   useEffect(() => {
    console.log(inputState);
    console.log(typeof inputState.a);
    console.log(typeof inputState.b);
  }, [inputState]);
  console.log(inputState); */
  return (
    <div className="input-app-container ">
      <h1>Result: {result}</h1>
      <div>
        <input
          type="number"
          name="a"
          onChange={handleInputChange}
          value={inputState.a}
        />
        <input
          type="number"
          name="b"
          onChange={handleInputChange}
          value={inputState.b}
        />
      </div>
      <div>
        <p>Operations:</p>
        <div>
          <button onClick={(e) => handleOperation("+")}>+</button>
          <button onClick={(e) => handleOperation("-")}>-</button>
          <button onClick={(e) => handleOperation("*")}>
            <span>*</span>
          </button>
          <button onClick={(e) => handleOperation("/")}>/</button>
          <button onClick={handleClearInput}>clear</button>
        </div>
      </div>
      <div className="history-container">
        <h3>History</h3>
        <p>
          <small>No history available!</small>
        </p>
        <ul className="history-result">
          <li>
            <span>1. Operation: 10 + 20</span>
            <span>Result: 30</span>
            <small>Date: </small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InputApp;
