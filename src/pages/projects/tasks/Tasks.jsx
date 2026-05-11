import React from "react";
import "./Tasks.css";
import useForm from "./useForm";
const Tasks = () => {
  const init = {
    text: "",
    checked: false,
  };
  const validate = (values) => {
    const error = {};
    if (!values.text) {
      error.text = "Invalid text";
    }
    if (!values.checked) {
      error.checked = "Invalid checked";
    }
    return error;
  };
  const {
    formState,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm({ init, validate });

  const getInputClass = (field) => {
    return `
      border rounded outline-none
      ${field.error ? "border-red-500" : ""}
      ${field.focused ? "ring-2 ring-blue-400" : ""}
    `;
  };

  const submitCallback = ({ error, hasError, values }) => {
    if (hasError) {
      console.log(error);
    } else {
      console.log(values);
      clear();
    }
  };
  return (
    <div className="tasks-todo-container">
      <h1>Tasks To Do</h1>
      <form onSubmit={(e) => handleSubmit(e, submitCallback)}>
        <div>
          <label htmlFor="text">Text: </label>
          <input
            type="text"
            name="text"
            value={formState.text.value}
            onChange={handleChange}
            onFocus={handleFocus} // Added
            onBlur={handleBlur} // Added
          />
          {formState.text.error && (
            <p style={{ color: "red" }}>{formState.text.error}</p>
          )}
        </div>
        <div>
          <label htmlFor="checked">Checked</label>
          <input
            type="checkbox"
            name="checked"
            // Access .value because useForm wraps everything in a state object
            checked={formState.checked.value}
            onChange={handleChange}
            onFocus={handleFocus} // Added
            onBlur={handleBlur} // Added
          />
        </div>
        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default Tasks;
