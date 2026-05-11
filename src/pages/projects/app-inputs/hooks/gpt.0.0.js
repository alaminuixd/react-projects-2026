import { useState } from "react";

// helpers
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

const mapStateToValues = (state) => {
  return Object.keys(state).reduce((acc, key) => {
    acc[key] = state[key].value;
    return acc;
  }, {});
};

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  // central validation
  const runValidation = (nextState) => {
    const values = mapStateToValues(nextState);

    let errors = {};
    let hasError = false;

    if (typeof validate === "function") {
      errors = validate(values);
      hasError = Object.keys(errors).length > 0;
    } else if (typeof validate === "boolean") {
      hasError = validate;
    } else {
      throw new Error("Validate must be boolean or function");
    }

    return { errors, hasError, values };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => {
      const next = {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };

      const { errors } = runValidation(next);

      return {
        ...next,
        [name]: {
          ...next[name],
          error: next[name].touched ? errors[name] || "" : "",
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
        focused: true,
        touched: true,
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

      const { errors } = runValidation(next);

      return {
        ...next,
        [name]: {
          ...next[name],
          error: next[name].touched ? errors[name] || "" : "",
        },
      };
    });
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();

    const { errors, hasError, values } = runValidation(state);

    // mark all as touched on submit
    const touchedState = Object.keys(state).reduce((acc, key) => {
      acc[key] = {
        ...state[key],
        touched: true,
        error: errors[key] || "",
      };
      return acc;
    }, {});

    setState(touchedState);

    cb({
      values,
      errors,
      hasError,
    });
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
