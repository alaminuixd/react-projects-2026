import React, { useEffect, useRef, useState } from "react";

const SimpleFocusGuard = () => {
  const [values, setValues] = useState({
    first: "",
    second: "",
    third: "",
  });

  const refs = {
    first: useRef(null),
    second: useRef(null),
    third: useRef(null),
  };

  useEffect(() => {
    console.log(refs.current?.third);
  }, []);

  const order = ["first", "second", "third"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    const index = order.indexOf(name);
    // check all previous fields
    for (let i = 0; i < index; i++) {
      const field = order[i];
      console.log(field);
      if (!values[field]) {
        // 🚨 redirect focus back
        refs[field].current.focus();
        return;
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3>Simple Focus Guard</h3>

      <input
        ref={refs.first}
        name="first"
        placeholder="First"
        value={values.first}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <br />

      <input
        ref={refs.second}
        name="second"
        placeholder="Second"
        value={values.second}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      <br />

      <input
        ref={refs.third}
        name="third"
        placeholder="Third"
        value={values.third}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
};

export default SimpleFocusGuard;
