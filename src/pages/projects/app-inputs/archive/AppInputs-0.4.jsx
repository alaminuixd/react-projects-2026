import React, { useEffect, useState } from "react";
/**
 * PERFECT 1
 */
const iniState = {
  title: "",
  bio: "",
  skills: "",
};
const AppInputs = () => {
  const [formState, setFormState] = useState({ ...iniState });
  const [errors, setErrors] = useState({});
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleInputChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateFields = (fields) => {
    const foundErrors = {};
    const { title, bio, skills } = fields;
    if (!title.trim()) {
      foundErrors["title"] = "Invalid title";
    }
    if (!bio.trim()) {
      foundErrors["bio"] = "Invalid bio";
    }
    if (!skills.trim()) {
      foundErrors["skills"] = "Invalid skills";
    }
    return {
      isValid: Object.keys(foundErrors).length === 0,
      validatedErrors: foundErrors,
    };
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const { isValid, validatedErrors } = validateFields(formState);
    setErrors(validatedErrors);
    if (isValid) {
      console.log("Form submitted:", formState);
    }
  };

  const handleFocus = (e) => {
    setFocuses((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!focuses[name]) return;

    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() ? "" : `Invalid ${name}`,
    }));
  };

  useEffect(() => {
    console.log(focuses);
  }, [focuses]);

  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>
      <form onSubmit={handleInputSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className={`${errors.title ? "border-red-500" : ""}`}
            name="title"
            placeholder="Software Engineer"
            value={formState.title}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            className={`${errors.bio ? "border-red-500" : ""}`}
            name="bio"
            placeholder="I am a software engineer..."
            value={formState.bio}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.bio && <p className="error-message">{errors.bio}</p>}
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            className={`${errors.skills ? "border-red-500" : ""}`}
            name="skills"
            placeholder="JavaScript, React"
            value={formState.skills}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.skills && <p className="error-message">{errors.skills}</p>}
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
