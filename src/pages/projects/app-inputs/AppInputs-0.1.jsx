import React, { useState, useRef } from "react";
import "./AppInputs.css";

const iniState = {
  title: "",
  bio: "",
  skills: "",
};

const fieldOrder = ["title", "bio", "skills"];

const AppInputs = () => {
  const [formState, setFormState] = useState({ ...iniState });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // refs for auto-focus
  const refs = {
    title: useRef(null),
    bio: useRef(null),
    skills: useRef(null),
  };

  // -------------------------
  // INPUT CHANGE
  // -------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -------------------------
  // VALIDATION
  // -------------------------
  const validateFields = (values) => {
    const validationErrors = {};
    const { title, bio, skills } = values;

    if (!title.trim()) {
      validationErrors.title = "Invalid title";
    }

    if (!bio.trim()) {
      validationErrors.bio = "Invalid bio";
    }

    if (!skills.trim()) {
      validationErrors.skills = "Invalid skills";
    }

    return validationErrors;
  };

  // -------------------------
  // ON BLUR → validate single field
  // -------------------------
  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const fieldError = validateFields(formState)[name];

    setErrors((prev) => ({
      ...prev,
      [name]: fieldError || "",
    }));
  };

  // -------------------------
  // PREVENT SKIPPING FIELDS
  // -------------------------
  const handleFocus = (e) => {
    const { name } = e.target;
    const currentIndex = fieldOrder.indexOf(name);
    console.log(currentIndex);

    for (let i = 0; i < currentIndex; i++) {
      const field = fieldOrder[i];

      if (!formState[field].trim()) {
        // mark it touched + set error
        setTouched((prev) => ({ ...prev, [field]: true }));

        setErrors((prev) => ({
          ...prev,
          [field]: `${field} is required`,
        }));

        // focus that field instead
        refs[field].current.focus();
        return;
      }
    }
  };

  // -------------------------
  // SUBMIT
  // -------------------------
  const handleInputSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateFields(formState);
    setErrors(validationErrors);

    // mark all as touched
    const allTouched = fieldOrder.reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (Object.keys(validationErrors).length > 0) {
      // focus first invalid field
      const firstErrorField = fieldOrder.find(
        (field) => validationErrors[field],
      );

      refs[firstErrorField].current.focus();
      return;
    }

    // success
    const formattedData = {
      ...formState,
      skills: formState.skills.split(",").map((s) => s.trim()),
    };

    console.log(formattedData);
  };

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>

      <form onSubmit={handleInputSubmit}>
        {/* TITLE */}
        <div>
          <label>Title:</label>
          <input
            ref={refs.title}
            type="text"
            name="title"
            value={formState.title}
            placeholder="Software Engineer"
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={errors.title && touched.title ? "border-red-500" : ""}
          />
          {errors.title && touched.title && (
            <p className="field-error">{errors.title}</p>
          )}
        </div>

        {/* BIO */}
        <div>
          <label>Bio:</label>
          <input
            ref={refs.bio}
            type="text"
            name="bio"
            value={formState.bio}
            placeholder="I am a software engineer..."
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={errors.bio && touched.bio ? "border-red-500" : ""}
          />
          {errors.bio && touched.bio && (
            <p className="field-error">{errors.bio}</p>
          )}
        </div>

        {/* SKILLS */}
        <div>
          <label>Skills:</label>
          <input
            ref={refs.skills}
            type="text"
            name="skills"
            value={formState.skills}
            placeholder="JavaScript, React"
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            className={errors.skills && touched.skills ? "border-red-500" : ""}
          />
          {errors.skills && touched.skills && (
            <p className="field-error">{errors.skills}</p>
          )}
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
