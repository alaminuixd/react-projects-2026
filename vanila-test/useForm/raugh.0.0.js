const createFieldState = (value, override = {}) => ({
  value,
  error: "",
  touched: false,
  focused: false,
  ...override,
});

const mapValuesToState = (values) =>
  Object.fromEntries(
    Object.entries(values).map(([key, val]) => [key, createFieldState(val)]),
  );

const mapStateToValues = (state) =>
  Object.fromEntries(
    Object.entries(state).map(([key, val]) => [key, val.value]),
  );

const applyErrorsToState = (state, errors) => {
  const newState = {};
  for (const key in state) {
    newState[key] = {
      ...state[key],
      error: errors[key] || "",
    };
  }
  return newState;
};

const useForm = ({ initialValues, validate }) => {
  if (typeof validate !== "function") {
    throw new Error("validate must be a function");
  }

  let state = mapValuesToState(initialValues);

  const getValues = () => mapStateToValues(state);

  const runValidation = () => {
    const values = getValues();
    const errors = validate(values) || {};

    state = applyErrorsToState(state, errors);

    const errorCount = Object.keys(errors).length;

    return {
      isValid: errorCount === 0,
      hasError: errorCount > 0,
      hasPartialError: errorCount > 0 && errorCount < Object.keys(state).length,
      errors,
      values,
    };
  };

  const setValue = (field, value) => {
    if (!state[field]) return;

    state[field] = {
      ...state[field],
      value,
    };
  };

  const setTouched = (field, touched = true) => {
    if (!state[field]) return;

    state[field] = {
      ...state[field],
      touched,
    };
  };

  const setFocused = (field, focused = true) => {
    if (!state[field]) return;

    state[field] = {
      ...state[field],
      focused,
    };
  };

  const reset = () => {
    state = mapValuesToState(initialValues);
  };

  // initial validation
  const validation = runValidation();

  return {
    getState: () => state,
    getValues,
    setValue,
    setTouched,
    setFocused,
    validate: runValidation,
    reset,
    ...validation,
  };
};
