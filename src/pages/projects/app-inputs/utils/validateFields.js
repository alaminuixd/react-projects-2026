export const validateFields = (values) => {
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
