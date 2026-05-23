import { useState } from "react";

/**
import { useState } from 'react';
 * Factory for individual field logic.
 * Merges the initial value with default and custom overrides.
 */
const createFieldState = (initialValue, override = {}) => ({
  value: initialValue,
  ...override,
});

/**
 * Orchestrator to transform a raw data object into a structured form state.
 * Includes safety checks to prevent crashes if arguments are missing.
 */
const createFormState = (
  initialState,
  fieldState = createFieldState, // Default to our factory
  override = {},
) => {
  if (
    !initialState ||
    typeof initialState !== "object" ||
    Array.isArray(initialState)
  ) {
    return {};
  }

  return Object.keys(initialState).reduce((acc, key) => {
    // We execute the fieldState mapper for every key in the init object
    acc[key] = fieldState(initialState[key], { ...override });
    return acc;
  }, {});
};

/**
 * Orchestrator to transform a structured form state to a plaind key => value date object
 */
const mapStateToValues = (state) => {
  const values = {};
  const keys = Object.keys(state);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    values[key] = state[key].value;
  }
  return values;
};

const runValidation = (state, validator) => {
  if (typeof state !== "object" && Array.isArray(state)) {
    throw new Error("state must be an object!");
  }
  if (typeof validator !== "function") {
    throw new Error("Validator must be a function!");
  }

  const values = mapStateToValues(state);

  const error = validator(values);
  const hasError = Object.keys(error).length > 0;
  return { error, hasError, values };
};

const useForm = ({ init, validate }) => {
  // create state for the form
  const [state, setState] = useState(
    createFormState(init, createFieldState, {
      error: "",
      touched: false,
      focused: false,
    }),
  );

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => {
      const next = {
        ...prev,
        [name]: {
          ...prev[name],
          value,
        },
      };
      if (!prev[name].touched) return next;
      const { error } = runValidation(next, validate);
      console.log(error);
      if (error) {
        return {
          ...next,
          [name]: {
            ...next[name],
            error:
              next[name].touched && !next[name].focused
                ? error[name] || ""
                : "",
          },
        };
      }
      return next;
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
      const error = validate(mapStateToValues(next));
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
    const plainValues = mapStateToValues(state);
    const { error, hasError, values } = runValidation(plainValues, validate);
    setState((prev) => {
      const next = { ...prev };
      for (const [name, errorValue] of Object.entries(error)) {
        next[name] = {
          ...next[name],
          touched: true,
          error: errorValue,
        };
      }
      return next;
    });
    return cb(error, hasError, values);
  };

  const handSub = (n, cb) => {
    return cb(n);
  };

  return { state, handleInput, handleFocus, handleBlur, handleSubmit, handSub };
};

export default useForm;
