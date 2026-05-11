import { useState } from "react";

const createFieldState = (initValue, override) => ({
  value: initValue,
  error: "",
  ...override,
});

const mapValuesToState = (initValue) => {
  const state = {};
  for (const [key, val] of Object.entries(initValue)) {
    state[key] = createFieldState(val, {
      error: "",
      touched: false,
      focused: false,
    });
  }
  return state;
};

const mapStateToValues = (state) => {
  const values = {};
  Object.keys(state).forEach((key) => {
    values[key] = state[key].value;
  });
  return values;
};

const runValidation = (state, validator) => {
  if (typeof validator !== "function")
    throw new Error("Validator must be a function");
  const values = mapStateToValues(state);
  const error = validator(values);

  const valuesLength = Object.keys(values).length;
  const errorLength = Object.keys(error).length;

  return {
    values,
    error,
    hasError: errorLength > 0,
    hasPartialError: errorLength > 0 && errorLength < valuesLength,
    isValid: errorLength === 0,
  };
};
// useForm starts
const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const actualValue = type === "checkbox" ? checked : value;
    setState((prev) => {
      const next = {
        ...prev,
        [name]: {
          ...prev[name],
          value: actualValue,
        },
      };
      if (!prev[name].touched) return next;
      const { error } = runValidation(next, validate);
      return {
        ...next,
        [name]: {
          ...next[name],
          error:
            next[name].touched && !next[name].focused ? error[name] || "" : "",
        },
      };
    });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true,
        focused: true,
        error: "",
      },
    }));
  };

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

      if (!next[name].touched) return next;

      const { error } = runValidation(next, validate);

      return {
        ...next,
        [name]: {
          ...next[name],
          error:
            next[name].touched && !next[name].focused ? error[name] || "" : "",
        },
      };
    });
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const { error, hasError, values } = runValidation(state, validate);
    const updatedState = Object.keys(state).reduce((accu, key) => {
      console.log("error key", error[key]);
      accu[key] = {
        ...state[key],
        touched: true,
        focused: false,
        error: error[key] || "",
      };
      console.log("Accu: ", accu);
      return accu;
    }, {});
    setState(updatedState);
    return cb({ error, hasError, values });
  };
  const clear = () => {
    setState(mapValuesToState(init));
  };
  return {
    state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};
export default useForm;
