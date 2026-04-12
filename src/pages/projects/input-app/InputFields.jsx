import React from "react";

const InputFields = ({
  handleInputChange,
  inputState,
  handleArithmeticOperation,
  handleClearInput,
}) => {
  const operations = ["+", "-", "*", "/"];
  const fields = ["a", "b"];

  return (
    <>
      <div>
        {fields.map((field) => (
          <input
            key={field}
            type="number"
            name={field}
            value={inputState[field]}
            onChange={handleInputChange}
          />
        ))}
      </div>

      <div>
        <p>Operations:</p>
        <div>
          {operations.map((op) => (
            <button key={op} onClick={() => handleArithmeticOperation(op)}>
              {op === "*" ? <span>{op}</span> : op}
            </button>
          ))}
          <button onClick={handleClearInput}>Clear</button>
        </div>
      </div>
    </>
  );
};

export default InputFields;
