export const validateFields01 = (values) => {
  const foundErrors = Object.keys(values).reduce((accuErrors, key) => {
    const value = values[key];
    if (!value.trim()) {
      accuErrors[key] = `Invalid ${key}`;
    }
    return accuErrors;
  }, {});

  return {
    errors: foundErrors,
    isValid: Object.keys(foundErrors).length === 0,
  };
};

/**
 * Validates a single input field.
 *
 * Checks whether the provided value is a non-empty string after trimming whitespace.
 *
 * @param {string} name - The name of the field being validated.
 * @param {string} value - The value of the field.
 * @returns {string} Returns an error message in the format "Invalid {name}" if the field is empty;
 * otherwise, returns an empty string.
 */
export const validateField = (name, value) => {
  if (!value.trim()) {
    return `Invalid ${name}`;
  }
  return "";
};

/**
 * Validates multiple input fields.
 *
 * Iterates over all fields in the given values object and validates each one
 * using the `validateField` function.
 *
 * @param {Object.<string, string>} values - An object where keys are field names
 * and values are the corresponding field values.
 * @returns {{
 *   errors: Object.<string, string>,
 *   isValid: boolean
 * }} Returns an object containing:
 * - `errors`: An object mapping field names to their error messages (if any).
 * - `isValid`: A boolean indicating whether all fields passed validation.
 */
export const validateFields = (values) => {
  const newErrors = {};

  Object.keys(values).forEach((key) => {
    const error = validateField(key, values[key]);
    if (error) newErrors[key] = error;
  });

  return {
    errors: newErrors,
    isValid: Object.keys(newErrors).length === 0,
  };
};
