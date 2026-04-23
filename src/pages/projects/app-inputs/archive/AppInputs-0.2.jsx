import React, { useEffect, useState } from "react";
import "./AppInputs.css";

const iniState = {
  title: "",
  bio: "",
  skills: "", // keep as string
};

const AppInputs = () => {
  const [formState, setFormState] = useState({ ...iniState });
  const [errors, setErrors] = useState({});

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // clear error for that field only
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  // validate fields
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

    return {
      errors: validationErrors,
      isValid: Object.keys(validationErrors).length === 0,
    };
  };

  // handle submit
  const handleInputSubmit = (e) => {
    e.preventDefault();
    const { errors: validationErrors, isValid } = validateFields(formState);
    setErrors(validationErrors);

    if (isValid) {
      // convert skills string → array
      const formattedData = {
        ...formState,
        skills: formState.skills.split(",").map((s) => s.trim()),
      };

      console.log(formattedData);
    }
  };

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>
      <form onSubmit={handleInputSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Software Engineer"
            value={formState.title}
            onChange={handleInputChange}
          />
          {errors.title && <p className="error-message">{errors.title}</p>}
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            name="bio"
            placeholder="I am a software engineer..."
            value={formState.bio}
            onChange={handleInputChange}
          />
          {errors.bio && <p className="error-message">{errors.bio}</p>}
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            name="skills"
            placeholder="JavaScript, React"
            value={formState.skills}
            onChange={handleInputChange}
          />
          {errors.skills && <p className="error-message">{errors.skills}</p>}
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
