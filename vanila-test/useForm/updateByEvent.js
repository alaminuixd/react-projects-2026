const ini = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

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

const mapStateToValues = (stateToMap) => {
  const values = {};
  const keys = Object.keys(stateToMap);
  for (let i = 0; i < keys.length; i++) {
    values[keys[i]] = stateToMap[keys[i]].value;
  }
  return values;
};

const formState = mapValuesToState(ini);

const formValue1 = mapStateToValues(formState);
console.log("Previous Values: ", formValue1);

/**
 * Immutably updates the `value` of an existing field in state by key.
 * @param {Object<string, { value: any, error: string, focused: boolean, touched: boolean }>} state
 * @param {{ name: string, value: any }} target
 * @returns {Object<string, { value: any, error: string, focused: boolean, touched: boolean }>}
 */
const updateState = (state, target) => {
  const { name: key, value } = target;
  return {
    ...state,
    [key]: {
      ...state[key],
      value,
    },
  };
};

const targets = [
  {
    name: "firstName",
    value: "Al Amin",
  },
  {
    name: "lastName",
    value: "",
  },
  {
    name: "email",
    value: "alamin@gmail.com",
  },
  {
    name: "password",
    value: "TestP@ss",
  },
];

/**
 *
 * @param {Record<string, Object>} state
 * @param {Array<Object<string, string>>} eTargets
 * @returns {Object<string, any>} A new object updated by targed array objects values
 */
const updateStateByTargets = (state, eTargets) => {
  let newState = { ...state };
  for (let i = 0; i < eTargets.length; i++) {
    newState = updateState(newState, eTargets[i]);
  }
  return newState;
};
/* const updateStateByTargets = (state, eTargets) => {
  let newState = {};
  for (let i = 0; i < eTargets.length; i++) {
    const updatedObj = updateState(state, eTargets[i]);
    const stateKeys = Object.keys(state);
    newState[stateKeys[i]] = updatedObj[stateKeys[i]];
  }
  return newState;
}; */

const validate = (values) => {
  const error = {};
  Object.keys(values).forEach((key) => {
    if (!values[key].trim()) {
      error[key] = `Invalid ${key}`;
    }
  });
  return error;
};

const runValidation = (validator, value) => {
  let error = {};
  let hasError = false;
  if (typeof validator === "function") {
    error = validator(value);
    hasError = Object.keys(error).length > 0;
  } else {
    return "The validator must be a function!";
  }
  return {
    error,
    hasError,
    values: value,
  };
};

const formState2 = updateStateByTargets(formState, targets);

const formValue2 = mapStateToValues(formState2);

console.log("Updated Value", formValue2);

const errorStatus = runValidation(validate, formValue2);

console.log("Error Status: ", errorStatus);
