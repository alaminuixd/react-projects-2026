import { useEffect, useState } from "react";
import { deepClone, isObjEmpty } from "../utils/objectHelpers";
import { validateFields } from "../utils/validateFields";

/* const params = {
  init: {},
  validate: (state) => {},
}; */

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleInputChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(state);
    // console.log("oldState: ", oldState);
    oldState[key].value = value;

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key] = "";
    }

    setState((prev) => ({ ...prev, ...oldState }));
  };

  /* const handleTouched = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    oldState[key].touched = true;
    setState(oldState);
  }; */
  const handleFocus = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    oldState[key].focused = true;

    if (!oldState[key].touched) {
      oldState[key].touched = true;
    }
    setState(oldState);
  };

  const handleBlur = (e) => {
    const { name: key } = e.target;
    const values = mapStateToKeys(oldState, "value");

    const { errors } = getErrors();

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;

    setState(oldState);
  };

  const handleInputSubmit = (e, cb) => {
    e.preventDefault();
    const { values, errors, hasError } = getErrors();
    cb({
      values,
      errors,
      hasError,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
  };

  const clear = () => {
    const newState = mapValuesToState(init, true);
    setState(newState);
  };

  const getErrors = () => {
    let hasError = null,
      errors = null;

    const values = mapStateToKeys(state, "values");
    console.log("Values", values);

    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCB = validateFields(values);
      console.log(errorsFromCB);
      hasError = !isObjEmpty(errorsFromCB);
      errors = errorsFromCB;
    } else {
      throw new Error("Validate must be boolean or function");
    }

    return { values, errors, hasError };
  };

  return {
    formState: state,
    handleInputChange,
    handleFocus,
    handleBlur,
    handleInputSubmit,
    clear,
  };
};

export default useForm;

/**
 * Converts a plain object of values into a structured form state object.
 *
 * Each key is transformed into a field state containing:
 * value, error, focused, and touched properties.
 *
 * @param {Object.<string, *>} values - Initial form values
 *
 * @returns {FormState} Structured form state object
 *
 * @example
 * mapValuesToState({ email: "" });
 * // returns:
 * // {
 * //   email: {
 * //     value: "",
 * //     error: "",
 * //     focused: false,
 * //     touched: false
 * //   }
 * // }
 */
export const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((accu, key) => {
    accu[key] = {
      value: shouldClear ? "" : values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return accu;
  }, {});
};

export const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((accu, curr) => {
    accu[curr] = state[curr][key];
    return accu;
  }, {});
};
