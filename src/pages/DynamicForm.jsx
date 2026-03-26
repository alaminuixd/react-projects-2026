import React, { useState } from "react";
import "./Contact.css";

const formFields = {
  name: {
    type: "text",
    label: "Your Name",
    placeholder: "John Doe",
  },
  email: {
    type: "email",
    label: "Your Email",
    placeholder: "example@gmail.com",
  },
  phone: {
    type: "tel",
    label: "Your Phone",
    placeholder: "+8801754824857",
  },
  password: {
    type: "password",
    label: "Password",
    placeholder: "xxxxxxxxxx",
  },
  re_password: {
    type: "password",
    label: "Re-Password",
    placeholder: "xxxxxxxxxx",
  },
  color: {
    type: "color",
    label: "Favourite Color",
    value: "#ff0000", // default color
  },
};

// Convert config into initial form state
const entries = Object.entries(formFields).map(([key, val]) => [
  key,
  val.value || "",
]);
// console.log(`Entries: ${entries}`);
const initialState = Object.fromEntries(entries);

// console.log(initialState);

const DynamicForm = () => {
  const [formData, setFormData] = useState(initialState);
  console.log(formData);

  const handleInputChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(`Name: ${name} Value: ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you can add validation or API submission
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        {Object.entries(formFields).map(([key, field]) => (
          <div className="input-wrapper" key={key}>
            <label htmlFor={key}>{field.label}</label>
            <input
              type={field.type}
              name={key}
              placeholder={field.placeholder || ""}
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

export default DynamicForm;
