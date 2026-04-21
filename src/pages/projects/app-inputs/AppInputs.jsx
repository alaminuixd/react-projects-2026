import React, { useEffect, useState } from "react";
import { deepClone, objectFrom } from "./utils/objectHelpers";
const iniState = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};
const AppInputs = () => {
  const [state, setState] = useState(deepClone(iniState));

  const handleInputChange = (e) => {
    const { name: key, value } = e.target;
    const oldState = deepClone(state);
    oldState[key].value = value;
    setState({ ...oldState });
  };

  const validateFields = (value) => {
    const foundError = {};

    const { title, bio, skills } = value;

    if (!title.trim()) {
      foundError["title"] = "Invalid title";
    }
    if (!bio.trim()) {
      foundError["bio"] = "Invalid bio";
    }
    if (!skills.trim()) {
      foundError["skills"] = "Invalid Skills";
    }
    return {
      isValid: Object.keys(foundError).length === 0,
      errors: foundError,
    };
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const values = objectFrom(state);
    const { isValid, errors } = validateFields(values);
    console.log(errors);
    if (isValid) {
      console.log(state);
    } else {
      const updatedState = deepClone(state);
      Object.keys(errors).forEach((key) => {
        updatedState[key].error = errors[key];
      });
      setState({ ...updatedState });
    }
  };

  const handleFocus = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    oldState[key].focus = true;
    setState({ ...oldState });
  };

  const handleBlur = (e) => {
    const { name: key } = e.target;
    const values = objectFrom(state);

    const { isValid, errors } = validateFields(values);

    const oldState = deepClone(state);
    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState({ ...oldState });
  };

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <div className="app-inputs-container">
      <h1>App Inputs</h1>
      <form onSubmit={handleInputSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className={`${state.title.error ? "border-red-400" : "border-gray-300"}`}
            name="title"
            placeholder="Software Engineer"
            value={state.title.value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {state.title.error && (
            <p className="error-message">{state.title.error}</p>
          )}
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            className={`${state.bio.error ? "border-red-400" : "border-gray-300"}`}
            name="bio"
            placeholder="I am a software engineer..."
            value={state.bio.value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {state.bio.error && (
            <p className="error-message">{state.bio.error}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            className={`${state.skills.error ? "border-red-400" : "border-gray-300"}`}
            name="skills"
            placeholder="JavaScript, React"
            value={state.skills.value}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {state.skills.error && (
            <p className="error-message">{state.skills.error}</p>
          )}
        </div>

        <button className="btn-blue">Submit</button>
      </form>
    </div>
  );
};

export default AppInputs;
