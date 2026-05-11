let init = {
  name: "",
  email: "",
};

const createFormState = (values) => {
  return Object.keys(values).reduce((accu, key) => {
    accu[key] = {
      value: values[key],
      error: "",
      focused: false,
      blured: false,
    };
    return accu;
  }, {});
};

const extractValues = (state) => {
  return Object.keys(state).reduce((accu, key) => {
    accu[key] = state[key].value;
    return accu;
  }, {});
};

const validate = (values) => {
  const error = {};
  if (!values.name.trim()) {
    error["name"] = "Invalid name!";
  }
  if (!values.email.trim()) {
    error["email"] = "Invalid email";
  }
  return error;
};

const runValidateion = (nextState, validator) => {
  const values = extractValues(nextState);
  let errors = {};
  let hasErrors = false;

  if (typeof validator === "function") {
    errors = validator(values);
    hasErrors = Object.keys(errors).length > 0;
  } else {
    return "Validator must be a funciton";
  }
  return { values, errors, hasErrors };
};

// ----------- Printing area ---------------

const state = createFormState(init);
console.log(state);

const values = extractValues(state);
console.log(values);

const validate1 = validate(values);
// console.log(validate1);

const {
  values: validatedValue,
  errors,
  hasErrors,
} = runValidateion(state, validate);

console.log("Values from validation: ", validatedValue);
console.log("Errors from Validation: ", errors);
console.log("Has Errors from validtion: ", hasErrors);
