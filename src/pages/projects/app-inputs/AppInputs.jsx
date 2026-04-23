import React, { useEffect } from "react";
import useForm from "./hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors["firstName"] = "First name is required!";
  }
  if (!values.lastName) {
    errors["lastName"] = "Last name is required!";
  }
  if (!values.email) {
    errors["email"] = "Email name is required!";
  }
  if (!values.password) {
    errors["password"] = "Password name is required!";
  }

  return errors;
};

const AppInputs = () => {
  const {
    formState,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleInputSubmit,
    clear,
  } = useForm({
    init,
    validate,
  });

  useEffect(() => {
    // console.log(formState);
  }, [formState]);

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>
      <form onSubmit={handleInputSubmit}>
        {/* First Name */}
        <div>
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={formState.firstName?.value}
            onChange={handleInputChange}
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName">First name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={formState.lastName?.value}
            onChange={handleInputChange}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formState.email?.value}
            onChange={handleInputChange}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            placeholder="******** (8 characters)"
            value={formState.password?.value}
            onChange={handleInputChange}
          />
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
