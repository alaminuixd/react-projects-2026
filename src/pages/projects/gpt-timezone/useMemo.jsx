import { useEffect, useMemo, useState } from "react";
// !Note: This component has been changed for the experiment; the expriment topic is React useMemo hook.
// The actual code is found in the old.jsx file
const GptTimezone = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  let themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "#160606" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyle]);

  return (
    <div
      style={themeStyle}
      className="space-y-2 w-full max-w-2xl mx-auto flex flex-col gap-3 p-10"
    >
      <input
        type="number"
        name="number"
        value={Math.max(number, 0)}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button className="btn-blue" onClick={() => setDark((prev) => !prev)}>
        Change Theme
      </button>
      <div>{doubleNumber}</div>
    </div>
  );
};

export default GptTimezone;

function slowFunction(num) {
  console.log("Calling Slow Function");
  for (let i = 0; i < 1000000000; i++) {
    /*  */
  }
  console.log("rendered");
  return num * 2;
}
/* 1000000000 */
