import React, { useEffect, useState } from "react";
import "./CreateTask.css";

const CreateTask = ({ addNewTask, updateTask }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const handleTask = (e) => {
    setText(() => e.target.value);
    setError("");
  };

  const handleNewTask = (e) => {
    if (!text) {
      return setError("Task field can't be empty");
    }
    addNewTask(text);
    setText("");
    setSuccess("New task added successfully!");
    setError("");
    return null;
  };

  useEffect(() => {
    if (!success) return;
    const timeoutId = setTimeout(() => {
      setSuccess("");
    }, 3000);
    return () => clearTimeout(timeoutId);
  });
  return (
    <div className="create-task-wrapper">
      <div className="create-task">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Type your task..."
          value={text}
          onChange={handleTask}
        />
        <button type="submit" onClick={() => handleNewTask()}>
          Add Task
        </button>
      </div>
      {success && <p className="success pt-10 text-center">{success}</p>}

      {error && <p className="error pt-10 text-center">{error}</p>}
    </div>
  );
};

export default CreateTask;
