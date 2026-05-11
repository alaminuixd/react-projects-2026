const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
const createFormState = (value, override = {}) => ({
  value,
  error: "",
  touched: false,
  focused: false,
  ...override,
});

const mapValuesToState = (values) => {
  const state = {};
  for (const [key, val] of Object.entries(values)) {
    state[key] = createFormState(val);
  }
  return state;
};

const mapStateToValues = (state) => {
  const values = {};
  for (const [key, val] of Object.entries(state)) {
    values[key] = val.value;
  }
  return values;
};

const validate = (values) => {
  const error = {};
  for (const [key, val] of Object.entries(values)) {
    if (!val.trim()) {
      error[key] = `Invalid ${key}!`;
    }
  }
  return error;
};

const useForm = ({ init, validate }) => {
  if (typeof validate !== "function") {
    return "validate must be a function!";
  }
  const state = mapValuesToState(init);
  const values = mapStateToValues(state);
  // run validation early
  const runValidation = (stateToValidate, validator) => {
    if (typeof validator !== "function") {
      return "Validator must be a function";
    }

    const values = mapStateToValues(stateToValidate);
    const error = validator(values);

    const valuesLength = Object.keys(values).length || "Undefined";
    const errorLength = Object.keys(error).length || "Undefined";

    return {
      hasError: errorLength > 0,
      isValid: errorLength === 0,
      error,
      values,
      hasPartialError: errorLength > 0 && errorLength < valuesLength,
    };
  };

  const errors = runValidation(state, validate);

  return { state, values, errors };
};

const { state, values, errors } = useForm({ init, validate });

console.log("state: ", state);
console.log("values: ", values);
console.log("errors: ", errors);
