import React, { useEffect, useState } from "react";
import "./UpdateTask.css";

const UpdateTask = ({ updateTask, setUpdate }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleTask = (e) => {
    setText(() => e.target.value);
    setError("");
  };

  const handleUpdateTask = (e) => {
    if (!text) {
      return setError("Task field can't be empty");
    }
    updateTask(text);
    setText("");
    setSuccess("Task updated successfully!");
    setError("");
    return null;
  };

  useEffect(() => {
    if (!success) return;
    const timeoutId = setTimeout(() => {
      setSuccess("");
    }, 2000);
    return () => clearTimeout(timeoutId);
  });
  return (
    <div className="update-task-wrapper">
      <div className="update-task">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Type your task..."
          value={text}
          onChange={handleTask}
        />
        <button type="submit" onClick={() => handleUpdateTask()}>
          Update Task
        </button>
      </div>
      {success ? (
        <p className="success pt-10 text-center">{success}</p>
      ) : (
        <p className="error pt-10 text-center">{error}</p>
      )}
    </div>
  );
};

export default UpdateTask;
