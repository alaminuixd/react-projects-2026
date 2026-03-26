import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  // handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleInputSubmit}>
        <div className="fname-wrapper">
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={formData.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className="lname-wrapper">
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={formData.lname}
            onChange={handleInputChange}
          />
        </div>
        <div className="email-wrapper">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
