import React from "react";
const InputIncDec = ({
  inc,
  dec,
  handleInputChangeInc,
  handleInputChangeDec,
}) => {
  return (
    <div style={{ margin: "2rem 0rem", display: "flex", gap: "1rem" }}>
      <label htmlFor="inc">Increment By: </label>
      <input
        type="number"
        name="inc"
        id="inc"
        value={inc}
        onChange={handleInputChangeInc}
      />
      <label htmlFor="dec">Decrement By: </label>
      <input
        type="number"
        name="dec"
        id="dec"
        value={dec}
        onChange={handleInputChangeDec}
      />
    </div>
  );
};

export default InputIncDec;
