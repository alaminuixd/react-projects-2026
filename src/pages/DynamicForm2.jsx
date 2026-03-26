import React, { useState } from "react";
import "./Contact.css";
import formFields from "../assets/formFields";

const entries = Object.entries(formFields);

const mapped = entries.map((entry) => {
  const [key, val] = entry;
  return [key, val.value || ""];
});

const initialState = Object.fromEntries(mapped);
console.log(initialState);

const DynamicForm2 = () => {
  const [formData, setFormData] = useState(initialState);

  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };

  return (
    <div className="contact-container">
      <h1 className="text-center mb-10">Dynamic Form Two</h1>
      <form onSubmit={handleInputSubmit}>
        {Object.entries(formFields)?.map(([key, fields]) => (
          <div key={key}>
            <label htmlFor={key}>{fields.label}</label>
            <input
              type={fields.type}
              placeholder={fields.placeholder}
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm2;
