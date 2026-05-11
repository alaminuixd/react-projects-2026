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
    errors.firstName = "First name is required!";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  }

  return errors;
};

const AppInputs = () => {
  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm({
    init,
    validate,
  });

  const cb = ({ values, errors, hasError }) => {
    if (hasError) {
      console.log(errors);
    } else {
      console.log(values);
      clear();
    }
  };

  const getInputClass = (field) => {
    return `
      border rounded outline-none
      ${field.error ? "border-red-500" : "border-gray-300"}
      ${field.focused ? "ring-2 ring-blue-400" : ""}
    `;
  };

  useEffect(() => {
    // console.log(formState);
  }, [formState]);

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>

      <form onSubmit={(e) => handleSubmit(e, cb)}>
        {/* First Name */}
        <div>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={formState.firstName.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={getInputClass(formState.firstName)}
          />
          {formState.firstName.error && (
            <p className="error-message">{formState.firstName.error}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={formState.lastName.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={getInputClass(formState.lastName)}
          />
          {formState.lastName.error && (
            <p className="error-message">{formState.lastName.error}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formState.email.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={getInputClass(formState.email)}
          />
          {formState.email.error && (
            <p className="error-message">{formState.email.error}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            placeholder="******** (8 characters)"
            value={formState.password.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={getInputClass(formState.password)}
          />
          {formState.password.error && (
            <p className="error-message">{formState.password.error}</p>
          )}
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
