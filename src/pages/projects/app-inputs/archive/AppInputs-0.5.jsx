import React, { useEffect, useState } from "react";
import { deepClone } from "../utils/objectHelpers";
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
  const [state, setState] = useState({ ...iniState });

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
    const { name: key, value } = e.target;
    const oldState = deepClone(state);
    oldState[key].value = value;
    oldState[key].error = "";
    setState({ ...oldState });

    /* setState((prev) => {
      console.log(prev);
      return {
        ...prev,
        [key]: {
          ...prev[key],
          value: value,
        },
      };
    }); */
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    // we are taking out state[title, bio, skills].value and adding them to new object
    const values = Object.keys(state).reduce((accu, key) => {
      accu[key] = state[key].value;
      return accu;
    }, {});
    console.log(values);

    const { errors, isValid } = validateFields(values);
    console.log(errors);
    console.log(isValid);
    /* if (!isValid) {
      setErrors(errors);
    }
    const focuseKeys = Object.keys(focuses);
    focuseKeys.forEach((key) => (focuses[key] = true)); */
  };

  const handleFocus = (e) => {
    const { name: key, value } = e.target;
    const oldState = deepClone(state);
    oldState[key].focus = true;
    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;

    const values = Object.keys(state).reduce((accu, key) => {
      accu[key] = state[key].value;
      return accu;
    }, {});

    const { errors } = validateFields(values);

    const oldState = deepClone(state);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);

    /* 
    const { errors, isValid } = validateFields(formState);
    // (!isValid) means validation found one or more errors in current formState
    if (!isValid && focuses[key]) {
      setErrors((prev) => ({ ...prev, [key]: errors[key] }));
    } */
  };

  useEffect(() => {
    /* console.log("title: ", state["title"]);
    console.log("bio: ", state["bio"]);
    console.log("skills: ", state["skills"]); */
    console.log(state);
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
            className={`${state.title.error && state.title.focus ? "border-red-400" : "border-gray-300"}`}
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
            className={`${state.bio.error && state.title.focus ? "border-red-400" : "border-gray-300"}`}
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
            className={`${state.skills.error && state.skills.focus ? "border-red-400" : "border-gray-300"}`}
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
