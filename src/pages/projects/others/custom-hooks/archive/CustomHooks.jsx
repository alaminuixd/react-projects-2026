import React, { useState } from "react";
import "./CustomHooks.css";
import Counter from "./components/Counter";
import useCounter from "./hooks/useCounter";

const CustomHooks = () => {
  // counter 1: Count by 1
  const {
    count: count1,
    handleIncrement: handleInc1,
    handleDecrement: handleDec1,
  } = useCounter();
  // counter 2: Count by 2
  const {
    count: count2,
    handleIncrement: handleInc2,
    handleDecrement: handleDec2,
  } = useCounter();

  return (
    <div className="custom-hooks-container">
      <h1>Custom Hooks</h1>
      <Counter
        count={count1}
        handleIncrement={handleInc1}
        handleDecrement={handleDec1}
      />
      <Counter
        count={count2}
        handleIncrement={() => handleInc2(2)}
        handleDecrement={() => handleDec2(2)}
      />
    </div>
  );
};

export default CustomHooks;
