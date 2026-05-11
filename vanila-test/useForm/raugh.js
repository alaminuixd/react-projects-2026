const validate = (values = {}) => {
  // Graceful handling instead of crashing
  if (!values || typeof values !== "object" || Array.isArray(values)) {
    console.error("Validation failed: Input must be a non-null object.");
    return {};
  }

  const errors = {};

  Object.keys(values).forEach((key) => {
    const value = values[key];

    // 1. Check if the value is missing or just whitespace
    // We check if it's a string specifically before calling .trim()
    if (
      value === null ||
      value === undefined ||
      (typeof value === "string" && !value.trim())
    ) {
      // Convert camelCase key to "Friendly Label" (e.g., firstName -> First Name)
      const label = key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
      errors[key] = `${label} is required`;
    }

    // 2. You can add specific logic here later
    // if (key === 'email' && !value.includes('@')) errors.email = 'Invalid email';
  });

  return errors;
};

const values = {
  firstName: "Al Amin",
  lastName: " ", // This will now trigger "Last Name is required"
  email: 25, // This won't crash the code anymore
};
const values2 = {
  firstName: "Al Amin",
  lastName: " ",
  email: "",
  password: "",
};

const errors = validate(values);
console.log(errors);

console.log(validate2(values2));
