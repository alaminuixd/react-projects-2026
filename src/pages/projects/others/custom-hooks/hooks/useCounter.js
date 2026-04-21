import { useState } from "react";

const useCounter = ({
  iniVal = 0,
  incBy = 1,
  decBy = 1,
  min = 0,
  max = 20,
} = {}) => {
  const [count, setCount] = useState(iniVal);

  const handleIncrement = (value = incBy) => {
    const step = Number(value);
    setCount((prev) =>
      Math.min(prev + (Number.isNaN(step) ? incBy : step), max),
    );
  };

  const handleDecrement = (value = decBy) => {
    const step = Number(value);
    setCount((prev) =>
      Math.max(prev - (Number.isNaN(step) ? decBy : step), min),
    );
  };

  return { count, handleIncrement, handleDecrement };
};

export default useCounter;
