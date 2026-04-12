/**
 * DONE: Handle user input fields
 * DONE: Handle operations
 * DONE: Handle a list of history
 * DONE: Render history list
 * TODO: Restor the history
 */
import React, { useEffect, useState } from "react";
import "./InputApp.css";
import { v4 as uuidv4 } from "uuid";
import formatDateTime from "../../../../utils/format/formatDateTime";

const initialInputState = {
  a: 0,
  b: 0,
};
// COMPONENT********
const InputApp = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };
  // handle clear input
  const handleClearInput = () => {
    setInputState({ ...initialInputState });
    setResult(0);
  };
  // handle clear histories
  const clearHistories = () => {
    setHistories([]);
    setInputState({ ...initialInputState });
    setResult(0);
  };

  // The best one scalable
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
      if (b === 0) {
        alert("Cannot divide by zero!");
        return 0;
      }
      return a / b;
    },
  };

  const handleArithmeticOperation = (operator) => {
    const { a, b } = inputState;
    if (isNaN(a) || isNaN(b)) {
      alert("Please add valid numbers!");
      return;
    }
    const operationResult = operations[operator](a, b);
    setResult(operationResult);

    const historyItem = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      operation: `${a} ${operator} ${b}`,
      res: operationResult,
      cleared: false,
    };

    setHistories((prev) => [...prev, historyItem]);
  };

  // Clear History Item
  const clearHistoryitem = (id) => {
    setHistories((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cleared: true } : item)),
    );
  };

  // Restore Cleared History Item
  const restoreHistoryitem = (id) => {
    setHistories((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cleared: false } : item)),
    );
  };

  // Toggle Clear and Restor the histories
  const toggleHandleHistory = (history) => {
    if (history.cleared) {
      restoreHistoryitem(history.id);
    } else {
      clearHistoryitem(history.id);
    }
  };

  // Toggle Clear and Restor the history v2
  const toggleHistory = (id, cleared) => {
    setHistories((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, cleared: !cleared } : item,
      );
    });
  };

  useEffect(() => {}, []);

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
          <button onClick={(e) => handleArithmeticOperation("+")}>+</button>
          <button onClick={(e) => handleArithmeticOperation("-")}>-</button>
          <button onClick={(e) => handleArithmeticOperation("*")}>
            <span>*</span>
          </button>
          <button onClick={(e) => handleArithmeticOperation("/")}>/</button>
          <button onClick={handleClearInput}>clear</button>
        </div>
      </div>
      <div className="history-container">
        <h3>History</h3>
        <div className="history-result">
          {histories.length > 0 ? (
            <ul className="history-result">
              {histories.map((history, index) => (
                <li key={history.id}>
                  <span>
                    {index + 1}. Operation:{" "}
                    <span className={history.cleared ? "removed" : "font-bold"}>
                      {history.cleared ? (
                        <span>Removed</span>
                      ) : (
                        history.operation
                      )}
                    </span>
                  </span>
                  <span>
                    Result:{" "}
                    <span className={history.cleared ? "removed" : ""}>
                      {history.cleared ? (
                        <span className="removed">Removed</span>
                      ) : (
                        history.res
                      )}
                    </span>
                  </span>
                  <small>
                    {history.cleared ? (
                      <span className="removed">Removed</span>
                    ) : (
                      formatDateTime(history.createdAt)
                    )}
                  </small>
                  {/* <button onClick={() => clearHistoryitem(history.id)}>
                    Clear
                  </button>
                  <button onClick={() => restoreHistoryitem(history.id)}>
                    Restor
                  </button> */}
                  {/* <button onClick={() => toggleHandleHistory(history)}>
                    {history.cleared ? "Restore" : "Clear"}
                  </button> */}
                  <button
                    onClick={() => toggleHistory(history.id, history.cleared)}
                  >
                    {history.cleared ? "Restor" : "Clear"}
                  </button>
                </li>
              ))}
              <button onClick={clearHistories}>Clear History</button>
            </ul>
          ) : (
            <p className="text-red-500">
              <small>No history available!</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputApp;
