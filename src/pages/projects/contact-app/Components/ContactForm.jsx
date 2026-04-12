import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const iniContValue = {
  fullName: "",
  email: "",
  group: "",
};

const ContactForm = ({ getData }) => {
  const [inputValue, setInputValue] = useState({ ...iniContValue });

  const formCursorRef = useRef(null);
  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const { fullName, email } = inputValue;
    if (!fullName.trim() || !email.trim())
      throw Error("fullName and Email fields are required");
    // add unique ID to each object
    const updatedData = {
      id: uuidv4(),
      ...inputValue,
      group: inputValue.group || "none",
    };
    getData(updatedData);
    setInputValue({ ...iniContValue });
    formCursorRef.current.focus();
  };

  useEffect(() => {
    // console.log(inputValue);
  }, [inputValue]);
  return (
    <form onSubmit={handleInputSubmit}>
      <div>
        <label htmlFor="name">Full Name: </label>
        <input
          type="text"
          name="fullName"
          value={inputValue.fullName}
          onChange={handleInputChange}
          ref={formCursorRef}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={inputValue.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="select-group">
        <label htmlFor="group">Group</label>
        <select
          name="group"
          value={inputValue.group}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select group
          </option>
          <option value="none">None</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
          <option value="business">Business</option>
        </select>
      </div>
      <button type="submit">Add new contact</button>
    </form>
  );
};

export default ContactForm;
