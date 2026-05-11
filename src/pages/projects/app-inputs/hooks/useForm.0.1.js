import { useState } from "react";

/**
 * Converts simple initial values into full form state shape
 * Adds: value, error, touched, focused for each field
 */
const mapValuesToState = (values) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: values[key],
      error: "",
      touched: false,
      focused: false,
    };
    return acc;
  }, {});
};

/**
 * Extracts only raw values from form state
 * (used for validation and submit)
 */
const mapStateToValues = (state) => {
  return Object.keys(state).reduce((acc, key) => {
    acc[key] = state[key].value; // firstName: {value: ""}/ lastName: {value: ""}/ email: { value: "" }/
    return acc;
  }, {});
};

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  /**
   * Runs validation on current or next state
   * Supports:
   * - function validator (recommended)
   * - boolean error flag (basic fallback)
   */
  const runValidation = (nextState) => {
    // {firstName: "value", lastName: "value", email: "value", password: "value"}
    const values = mapStateToValues(nextState);
    let errors = {};
    let hasError = false;

    if (typeof validate === "function") {
      // return errors = {[items]: `invalid ${items}`}
      errors = validate(values);
      hasError = Object.keys(errors).length > 0;
    } else if (typeof validate === "boolean") {
      hasError = validate;
    } else {
      throw new Error("Validate must be boolean or function");
    }

    return { errors, hasError, values };
  };

  /**
   * Updates field value on every keystroke
   * Only runs validation if user has already interacted (touched)
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the value of the changed field
    setState((prev) => {
      const next = {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };

      // If the field hasn't been interacted with (touched),
      // skip validation and just update the value
      if (!prev[name].touched) return next;

      // Run validation on updated state
      const { errors } = runValidation(next);

      // Apply error only when:
      // - field is touched
      // - field is NOT focused (i.e., user finished typing / blurred)
      return {
        ...next,
        [name]: {
          ...next[name],
          error:
            next[name].touched && !next[name].focused ? errors[name] || "" : "",
        },
      };
    });
  };

  /**
   * Called when input receives focus
   * Marks field as active and touched
   * Also clears error while user is typing
   */
  const handleFocus = (e) => {
    const { name } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        focused: true,
        touched: true,
        error: "",
      },
    }));
  };

  /**
   * Called when input loses focus
   * Removes focus state and triggers validation
   */
  const handleBlur = (e) => {
    const { name } = e.target;
    setState((prev) => {
      const next = {
        ...prev,
        [name]: {
          ...prev[name],
          focused: false,
        },
      };
      const { errors } = runValidation(next);

      // console.log("Errors from handleBlur: ", errors);

      const result = {
        ...next,
        [name]: {
          ...next[name],
          error: errors[name] || "",
        },
      };
      // console.log("Result from handleBlur: ", result);
      return result;
    });
  };

  /**
   * Handles form submission
   * - Runs full validation
   * - Marks all fields as touched
   * - Returns values, errors, and hasError to callback
   */
  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { errors, hasError, values } = runValidation(state);

    // mark all fields as touched on submit
    const touchedState = Object.keys(state).reduce((acc, key) => {
      acc[key] = {
        ...state[key],
        touched: true,
        focused: false,
        error: errors[key] || "",
      };
      return acc;
    }, {});

    setState(touchedState);
    // Based on the cb values we clear the form. We only rest the form if !errors
    cb({
      values,
      errors,
      hasError,
    });
  };

  /**
   * Resets form back to initial state
   */
  const clear = () => {
    setState(mapValuesToState(init));
  };

  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

export default useForm;
