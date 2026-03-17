import React, { useState } from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [editStatus, setEditStatus] = useState(task.isCompleted);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleUpdate = () => {
    onUpdate(task.id, editText, editStatus);
    setIsEditing(false);
  };

  return (
    <ul className="each-task">
      <li>
        {isEditing ? (
          <div className="update-input-container">
            <div className="update-input-wrapper">
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <select
                value={editStatus ? "Completed" : "Not Completed"}
                onChange={(e) => setEditStatus(e.target.value === "Completed")}
              >
                <option>Not Completed</option>
                <option>Completed</option>
              </select>
            </div>
            <button onClick={handleUpdate}>Update</button>
          </div>
        ) : (
          <div>
            <h3>Task: {task.text}</h3>
            <p>Status: {task.isCompleted ? "Completed" : "Active"}</p>
            <p>Date: {formatDate(task.createdAt)}</p>
          </div>
        )}

        {!isEditing && (
          <ul className="task-settings">
            <li
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </li>
            <li onClick={() => onDelete(task.id)}>Delete</li>
          </ul>
        )}
      </li>
    </ul>
  );
};
export default TaskItem;
