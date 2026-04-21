import React, { useRef, useState } from "react";
import "./AppInputs.css";

const FocusGuard2 = () => {
  const [inputVal, setInputVal] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
  });
  const refs = {
    one: useRef(null),
    two: useRef(null),
    three: useRef(null),
    four: useRef(null),
    five: useRef(null),
  };

  // orders of the inputs
  const orders = ["one", "two", "three", "four", "five"];

  // handlers
  const handleInutChange = (e) => {
    const { name, value } = e.target;
    setInputVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    /*     console.log(name);
    console.log(refs[name].current); */
    const index = orders.indexOf(name);
    // console.log(index);
    console.log("---------------------");
    for (let i = 0; i < index; i++) {
      const field = orders[i];
      console.log("checking: " + i);
      if (!inputVal[field]) {
        refs[field].current.focus();
        return;
      }
      /*       console.log("index is: " + i);
      console.log("---------------------------------"); */
    }
  };

  /* 
  handleFocus function will fire on every time the we focus on the input
  1. we destructure "name" from e.target object
  We have an orders array exactly in the order of our input fields.
  Meaning, 
    input names are respectively "one", "two", "three", "four", "five"
    orders array items are also respectively "one", "two", "three", "four", "five"
  2. we extract the "index" value of the clicked item by using orders.indexOf(name)
  3. Then we run a loop that iterates less then the index number
  Meaning,
  if we click on te first item the loop never runs as it's less than 0 and directly focus on the first input and return from the loop.
  4. In the loop we have "field" which is one item ahed of the focused input item.
  If we click on the second item, as "field" is the previous one, it check if inputVal[field] has any value. If it has value if just instinctly focus on that item. But if it has not any value it focus on that previous item.
  If we click on the 3rd item and and all other fields above it are empty, here is what happens
  - The loop iterates 2 times ad i < index
  iteration 1: check if previous input has value "if (!inputVal[field])". If it has value just focuses on the clicked one and return and no more looping. But if no value ite iterates again and the focus jumps on that previous one and this process repeat.
  This iteration happens so quick that if we click on 100th item and before that all items are empty the focus seats on the first input item.


  
  */

  return (
    <div className="app-inputs-container">
      <h1>Focus Guard Two</h1>
      <div>
        <input
          ref={refs.one}
          type="text"
          name="one"
          value={inputVal.one}
          onChange={handleInutChange}
          onFocus={handleFocus}
        />
        <input
          ref={refs.two}
          type="text"
          name="two"
          value={inputVal.two}
          onChange={handleInutChange}
          onFocus={handleFocus}
        />
        <input
          ref={refs.three}
          type="text"
          name="three"
          value={inputVal.three}
          onChange={handleInutChange}
          onFocus={handleFocus}
        />
        <input
          ref={refs.four}
          type="text"
          name="four"
          value={inputVal.four}
          onChange={handleInutChange}
          onFocus={handleFocus}
        />
        <input
          ref={refs.five}
          type="text"
          name="five"
          value={inputVal.five}
          onChange={handleInutChange}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default FocusGuard2;
