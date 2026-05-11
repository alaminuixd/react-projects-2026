const init = {
  name: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const error = {};
  if (!values["name"]?.trim()) {
    error["name"] = "Invalid name!";
  }
  if (!values["email"]?.trim()) {
    error["email"] = "Invalid email";
  }
  if (!values["password"]?.trim()) {
    error["password"] = "Invalid password";
  }
  return error;
};

const createFormState = (values) => {
  return Object.keys(values).reduce((accu, key) => {
    accu[key] = {
      value: values[key],
      error: "",
      focused: false,
      blurred: false,
    };
    return accu;
  }, {});
};

const stateToValues = (values, key) => {
  return Object.keys(values).reduce((accu, field) => {
    accu[field] = values[field][key];
    return accu;
  }, {});
};

const runValidation = (validator, values) => {
  if (typeof validator !== "function") {
    return "Validator must be a function";
  }
  const error = validator(values);
  return {
    error,
    hasErrors: Object.keys(error).length > 0,
  };
};

const state = createFormState(init);
console.log(state);

const values = stateToValues(state, "value");
console.log(values);

const errors = runValidation(validate, values);
console.log(errors);
