const field1 = {
  name: "",
  email: "",
  password: "",
};

const validateField = (name, value) => {
  if (typeof value === "string" && !value.trim()) {
    return `Invalid ${name}`;
  }
  return "";
};

const validateFields = (values) => {
  // create a new error object
  const newErrors = {};
  // update or leave empty the newError object based on values provided.
  Object.entries(values).forEach(([name, val]) => {
    const error = validateField(name, val);
    if (error) {
      newErrors[name] = error;
    }
  });
  // return a new object with errors and isValid (if newErrors is not empty) based on it's length
  return {
    isValid: Object.keys(newErrors).length === 0,
    errors: newErrors,
  };
};

console.log(validateFields(field1));
