import React, { useEffect, useState } from "react";
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

  const validateFields = (values) => {
    const foundErrors = {};
    const { title, bio, skills } = values;

    if (!title.trim()) {
      foundErrors.title = "Invalid title";
    }
    if (!bio.trim()) {
      foundErrors.bio = "Invalid boi";
    }
    if (!skills.trim()) {
      foundErrors.skills = "Invalid skills";
    }

    return {
      errors: foundErrors,
      isValid: Object.keys(foundErrors).length === 0,
    };
  };

  // Handler functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateFields(formState);
    if (!isValid) {
      setErrors(errors);
    }
    const focuseKeys = Object.keys(focuses);
    focuseKeys.forEach((key) => (focuses[key] = true));
  };

  const handleFocus = (e) => {
    setFocuses((prev) => ({ ...prev, [e.target.name]: true }));
    // console.log(focuses);
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors, isValid } = validateFields(formState);
    // (!isValid) means validation found one or more errors in current formState
    if (!isValid && focuses[key]) {
      setErrors((prev) => ({ ...prev, [key]: errors[key] }));
    }
  };

  useEffect(() => {
    // console.log(errors);
    console.log(focuses);
    console.log(formState);
    const { errors, isValid } = validateFields(formState);
    console.log(!isValid);
  }, [focuses, formState]);
  useEffect(() => {
    // console.log(formState);
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
            className={`${errors.title && focuses.title ? "border-red-400" : "border-gray-300"}`}
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
            className={`${errors.bio && focuses.bio ? "border-red-400" : "border-gray-300"}`}
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
            className={`${errors.skills && focuses.skills ? "border-red-400" : "border-gray-300"}`}
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
