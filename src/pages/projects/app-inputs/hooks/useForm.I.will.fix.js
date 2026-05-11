import { useEffect, useState } from "react";
import { deepClone, isObjEmpty } from "../utils/objectHelpers";

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(state);
    oldState[key].value = value;
    const { errors } = getErrors();

    // console.log("Errors: ", errors);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

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

  const handleSubmit = (e, cb) => {
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

    const values = mapStateToKeys(state, "value");

    // console.log("From GetErrors (values): ", values);

    if (typeof validate === "boolean") {
      hasError = validate;
      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCB = validate(values);
      // console.log(errorsFromCB);
      hasError = !isObjEmpty(errorsFromCB);
      errors = errorsFromCB;
    } else {
      throw new Error("Validate must be boolean or function");
    }

    return { values, errors, hasError };
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
