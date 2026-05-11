import { useState } from "react";

/**
 * Converts simple initial values into full form state shape
 * Adds: value, error, touched, focused for each field
 */
const mapValuesToState = (values) => {
  const state = {};
  const keys = Object.keys(values);
  for (let i = 0; i < keys.length; i++) {
    state[keys[i]] = {
      value: values[keys[i]],
      error: "",
      touched: false,
      focused: false,
    };
  }
  return state;
};
/**
 * Extracts only raw values from form state
 * (used for validation and submit)
 */
const mapStateToValues = (state) => {
  const values = {};
  const keys = Object.keys(state);
  for (let i = 0; i < keys.length; i++) {
    values[keys[i]] = state[keys[i]].value;
  }
  return values;
};

const runValidation = (state, validator) => {
  if (typeof validator !== "function")
    return "The validator must be a function.";
  // Main Logic to build the errors.
  const values = mapStateToValues(state);
  const error = validator(values);
  // subsidiary variables to avoid repetition.
  const totalFields = Object.keys(values).length;
  const totalErrors = Object.keys(error).length;
  const errorKeys = Object.keys(error);

  return {
    hasError: totalErrors > 0,
    isValid: totalErrors === 0,
    partialError: totalErrors > 0 && totalErrors < totalFields,
    invalidFields: errorKeys,
    error,
    values,
  };
};

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;

    // Determine the actual value based on the input type
    const actualValue = type === "checkbox" ? checked : value;

    setState((prev) => {
      const next = {
        ...prev,
        [key]: {
          ...prev[key],
          value: actualValue, // Store checkbox boolean here
        },
      };

      if (!prev[key].touched) return next;

      const { error } = runValidation(next, validate);
      return {
        ...next,
        [key]: {
          ...next[key],
          error:
            next[key].touched && !next[key].focused ? error[key] || "" : "",
        },
      };
    });
  };

  const handleFocus = (e) => {
    const { name: key } = e.target;
    console.log(key);
    setState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        touched: true,
        focused: true,
        error: "",
      },
    }));
  };

  const handleBlur = (e) => {
    const { name: key } = e.target;
    setState((prev) => {
      const next = {
        ...prev,
        [key]: {
          ...prev[key],
          focused: false,
        },
      };

      if (!prev[key].touched) return next;

      const { error } = runValidation(next, validate);

      return {
        ...next,
        [key]: {
          ...next[key],
          error:
            next[key].touched && !next[key].focused ? error[key] || "" : "",
        },
      };
    });
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const { error, hasError, values } = runValidation(state, validate);
    const updatedState = Object.keys(state).reduce((accu, key) => {
      accu[key] = {
        ...state[key],
        touched: true,
        focused: false,
        error: error[key] || "",
      };
      return accu;
    }, {});
    console.log(updatedState);
    setState(updatedState);
    return cb({ error, hasError, values });
  };

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
