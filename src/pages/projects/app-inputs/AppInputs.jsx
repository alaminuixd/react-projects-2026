import { useEffect } from "react";
import useForm from "./hooks/useForm";
const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const validate = (values = {}) => {
  const error = {};
  if (!values.firstName.trim()) {
    error.firstName = "First name is required!";
  }
  if (!values.lastName.trim()) {
    error.lastName = "Last name is required!";
  }
  if (!values.email.trim()) {
    error.email = "Email is required!";
  }
  if (!values.password.trim()) {
    error.password = "Password is required!";
  }
  return error;
};

const AppInputs = () => {
  // useForm custom hook
  const { state, handleInput, handleFocus, handleBlur, handleSubmit, handSub } =
    useForm({
      init,
      validate,
    });

  const submitCallBack = (error, hasError, values) => {
    if (hasError) {
      console.log("Error: ", error);
    }
    console.log("Values: ", values);
  };

  useEffect(() => {
    const result = handSub(10, (n) => n * 20);
    console.log(result);
  }, []);

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>
      <form onSubmit={(e) => handleSubmit(e, submitCallBack)}>
        {/* First Name */}
        <div>
          <label>First name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="Your First Name"
            value={state.firstName.value}
            onFocus={handleFocus}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {state.firstName.error && (
            <p className="error-message">{state.firstName.error}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label>Last name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Your Last Name"
            value={state.lastName.value}
            onFocus={handleFocus}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {state.lastName.error && (
            <p className="error-message">{state.lastName.error}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={state.email.value}
            onFocus={handleFocus}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {state.email.error && (
            <p className="error-message">{state.email.error}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            placeholder="******** (8 characters)"
            value={state.password.value}
            onFocus={handleFocus}
            onChange={handleInput}
            onBlur={handleBlur}
          />
          {state.password.error && (
            <p className="error-message">{state.password.error}</p>
          )}
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
