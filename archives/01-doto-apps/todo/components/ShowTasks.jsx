import React, { useEffect, useState } from "react";
import "./ShowTasks.css";
import ConfirmModal from "./ConfirmModal";

const ShowTasks = ({ tasks, handleDeleteTask, updateTask }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editStatus, setEditStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // receives the task id
  const [taskToDelete, setTaskToDelete] = useState(null);
  // return tasks based on their status ["All", "Active", "Completed"]
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Active") return !task.isCompleted;
    if (activeFilter === "Completed") return task.isCompleted;
    return true;
  });

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

  useEffect(() => {
    console.log("Filtered Tasks:", filteredTasks);
  }, [activeFilter, tasks]);

  return (
    <div className="show-tasks-container">
      <div className="task-filter-container">
        <ul>
          {["All", "Active", "Completed"].map((item) => (
            <li
              key={item}
              className={activeFilter === item ? "active-filter" : ""}
              onClick={() => setActiveFilter(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="task-list-container">
        {filteredTasks.length ? (
          filteredTasks.map((task) => (
            <ul className="each-task" key={task.id}>
              <li>
                {editId === task.id ? (
                  <div className="update-input-container">
                    <div className="update-input-wrapper">
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                      <select
                        value={editStatus ? "Completed" : "Not Completed"}
                        onChange={(e) =>
                          setEditStatus(e.target.value === "Completed")
                        }
                      >
                        <option>Not Completed</option>
                        <option>Completed</option>
                      </select>
                    </div>
                    <button
                      onClick={() => {
                        updateTask(task.id, editText, editStatus);
                        setEditId(null);
                      }}
                    >
                      Update
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3>Task: {task.text}</h3>
                    <p>Status: {task.isCompleted ? "Completed" : "Active"}</p>
                    <p>Date: {formatDate(task.createdAt)}</p>
                  </div>
                )}

                {editId !== task.id && (
                  <ul className="task-settings">
                    <li
                      onClick={() => {
                        setEditId(task.id);
                        setEditText(task.text);
                        setEditStatus(task.isCompleted);
                      }}
                    >
                      Edit
                    </li>
                    <li onClick={() => setTaskToDelete(task.id)}>Delete</li>
                  </ul>
                )}
              </li>
            </ul>
          ))
        ) : (
          <h2>No task found</h2>
        )}
      </div>
      <>
        <ConfirmModal
          isOpen={taskToDelete !== null}
          message={`Are you sure you want to delete this task?`}
          onConfirm={() => {
            handleDeleteTask(taskToDelete);
            setTaskToDelete(null);
          }}
          onCancel={() => {
            setTaskToDelete(null);
            console.log(taskToDelete);
          }}
        />
      </>
    </div>
  );
};

export default ShowTasks;
