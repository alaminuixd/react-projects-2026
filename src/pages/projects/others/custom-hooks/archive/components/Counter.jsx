import React from "react";

const Counter = ({ count, handleDecrement, handleIncrement }) => {
  return (
    <div className="buttonset buttonset-1">
      <button className="btn-blue" onClick={handleDecrement}>
        Decrement
      </button>
      <div className="result1">
        <p>{count}</p>
      </div>
      <button className="btn-blue" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
