import React, { useState } from "react";
import "./AppInputs.css";

const initialState = {
  title: "",
  bio: "",
  skills: "",
};

const AppInputs = () => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // validate single field
  const validateField = (name, value) => {
    if (!value.trim()) {
      return `Invalid ${name}`;
    }
    return "";
  };

  // validate all fields
  const validateFields = (values) => {
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

  // handle blur (field-level validation)
  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors: validationErrors, isValid } = validateFields(formState);
    setErrors(validationErrors);

    // mark all fields as touched
    const allTouched = Object.keys(formState).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (isValid) {
      const formattedData = {
        ...formState,
        skills: formState.skills.split(",").map((s) => s.trim()),
      };

      console.log("Submitted:", formattedData);
    }
  };

  const getInputClass = (field) =>
    touched[field] && errors[field] ? "border-red-500" : "";

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass("title")}
            placeholder="Software Engineer"
          />
          {touched.title && errors.title && (
            <p className="error-message">{errors.title}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label>Bio:</label>
          <input
            type="text"
            name="bio"
            value={formState.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass("bio")}
            placeholder="I am a software engineer..."
          />
          {touched.bio && errors.bio && (
            <p className="error-message">{errors.bio}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formState.skills}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getInputClass("skills")}
            placeholder="JavaScript, React"
          />
          {touched.skills && errors.skills && (
            <p className="error-message">{errors.skills}</p>
          )}
        </div>

        <button className="btn-blue mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
