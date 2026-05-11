const stateRaw = {
  firstName: {
    value: "",
    error: "",
    focused: false,
    touched: false,
  },
  lastName: {
    value: "",
    error: "",
    focused: false,
    touched: false,
  },
  email: {
    value: "",
    error: "",
    focused: false,
    touched: false,
  },
  password: {
    value: "",
    error: "",
    focused: false,
    touched: false,
  },
};

const init = {
  firstName: "Al",
  lastName: "Amin",
  email: "al@gamil.com",
  password: "1323546",
};

//Return a new extended object with given values.
/**
Transforms a flat object of initial values into a structured state object.

Each key is mapped to an object containing:
value: the original value (or empty string if shouldClear is true)
error: empty string
touched: false
focused: false

Example:
const iniValues = { name: "John", email: "john@mail.com" };

mapValuesToState(iniValues);
// {
// name: { value: "John", error: "", touched: false, focused: false },
// email: { value: "john@mail.com", error: "", touched: false, focused: false }
// }
@param {Object.<string, any>} iniValues - Flat object with key-value pairs.
@param {boolean} [shouldClear=false] - If true, all values are reset to empty strings.
@returns {Object.<string, { value: any, error: string, touched: boolean, focused: boolean }>}
*/
const mapValuesToState = (iniValues, shouldClear = false) => {
  return Object.keys(iniValues).reduce((accuObj, currKey) => {
    accuObj[currKey] = {
      value: shouldClear ? "" : iniValues[currKey],
      error: "",
      touched: false,
      focused: false,
    };
    return accuObj;
  }, {});
};

/**
 * Maps an object of state values to a new object containing only a specific property from each item.
 *
 * Example:
 * const stateValues = {
 * name: { value: "", error: "Name is missing!" },
 * email: { value: "", error: "" }
 * };
 *
 * mapStateToKeys(stateValues, "error");
 * // Returns:
 * // {
 * //   name: "Name is missing!",
 * //   email: ""
 * // }
 *
 * @param {Object.<string, Object>} stateValues - Object containing nested objects with properties like "value" and "error".
 * @param {string} key - The property to extract from each nested object.
 * @returns {Object.<string, any>} A new object with the same keys, mapping to the selected property values.
 */
const mapStateToKeys = (stateValues, key) => {
  return Object.keys(stateValues).reduce((accuObj, currKey) => {
    accuObj[currKey] = stateValues[currKey][key];
    return accuObj;
  }, {});
};

const validate = (values) => {
  const errors = {};
  if (!values.firstName.trim()) {
    errors["firstName"] = "Invalid first name!";
  }
  if (!values.lastName.trim()) {
    errors["lastName"] = "Invalid last name!";
  }
  if (!values.email.trim()) {
    errors["email"] = "Invalid email!";
  }
  if (!values.password.trim()) {
    errors["password"] = "Invalid password!";
  }
  return errors;
};

const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const getErrors = (state) => {
  let hasError = null,
    errors = null;

  const values = mapStateToKeys(state, "value");

  console.log("From GetErrors (values): ", values);

  if (typeof validate === "boolean") {
    hasError = validate;
    errors = mapStateToKeys(state, "error");
  } else if (typeof validate === "function") {
    const errorsFromCB = validate(values);
    console.log(errorsFromCB);
    hasError = !isObjEmpty(errorsFromCB);
    errors = errorsFromCB;
  } else {
    throw new Error("Validate must be boolean or function");
  }

  return { values, errors, hasError };
};

const stateOne = mapValuesToState(init);
console.log("State: ", stateOne);

const stateKeys = mapStateToKeys(stateOne, "value");

const errors = validate(stateKeys);

console.log("Errors: ", errors);

console.log(getErrors(stateOne));
