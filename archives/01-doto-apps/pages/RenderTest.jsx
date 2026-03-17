import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./RenderTest.css";
import ConfirmBox from "./ConfirmBox";

const data = [
  {
    id: uuidv4(),
    text: "Task One",
    isCompleted: false,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    text: "Task Two",
    isCompleted: false,
    createdAt: new Date(),
  },
  {
    id: uuidv4(),
    text: "Task Three",
    isCompleted: false,
    createdAt: new Date(),
  },
];
const formatDate = (date) => {
  return date.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

const RenderTest = () => {
  // states
  const [tasks, setTasks] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [editText, setEditText] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const editAreaRef = useRef(null);

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Active") return !task.isCompleted;
    if (activeFilter === "Completed") return task.isCompleted;
    return true;
  });

  // handler functions
  const handleEditClick = (task) => {
    setTaskToEdit(task.id);
    setEditText(task.text);
  };

  const handleUpdateTask = (id, updatedText) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              text: updatedText,
              isCompleted: taskStatus === "completed",
            }
          : task,
      ),
    );
    setTaskToEdit(null);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  useEffect(() => {
    console.log(activeFilter);
    console.log(taskToEdit);
    console.log(`Task Status: ${taskStatus}`);
  }, [activeFilter, taskToEdit, taskStatus]);

  useEffect(() => {
    function closeEditMode(e) {
      if (editAreaRef.current && !editAreaRef.current.contains(e.target)) {
        setTaskToEdit(null);
      }
    }
    document.addEventListener("mousedown", closeEditMode);
    return () => document.removeEventListener("mousedown", closeEditMode);
  }, []);
  /* useEffect(() => {
    const handleClickOutside = (e) => {
      if (editAreaRef.current && !editAreaRef.current.contains(e.target)) {
        setTaskToEdit(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); */
  return (
    <div className="render-test-container">
      <ul>
        {["All", "Active", "Completed"].map((item) => (
          <li
            key={item}
            className={activeFilter === item ? "renderActiveFilter" : ""}
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        {filteredTasks.length ? (
          filteredTasks.map((task) => (
            <ul key={task.id}>
              {taskToEdit === task.id ? (
                <div className="render-task-update-container" ref={editAreaRef}>
                  <div>
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <div className="render-task-select-container">
                      <select
                        value={taskStatus}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setTaskStatus(
                            e.target.value === "active"
                              ? "active"
                              : "completed",
                          );
                        }}
                      >
                        <option value="completed">Completed</option>
                        <option value="active">Active</option>
                      </select>
                    </div>
                  </div>
                  <ul>
                    <li onClick={() => handleUpdateTask(task.id, editText)}>
                      Update
                    </li>
                  </ul>
                </div>
              ) : (
                <li>
                  <div>
                    <h3 className="text-blue-700">{task.text}</h3>
                    <p
                      className={`text-sm ${task.isCompleted ? "text-green-700" : "text-yellow-600"}`}
                    >
                      {task.isCompleted ? "Completed" : "Not Completed"}
                    </p>
                    <p className="text-xs">{formatDate(task.createdAt)}</p>
                  </div>
                  <ul>
                    <li
                      onClick={() => {
                        handleEditClick(task);
                        setTaskStatus(
                          task.isCompleted ? "completed" : "active",
                        );
                      }}
                    >
                      Edit
                    </li>
                    <li onClick={() => setTaskToDelete(task.id)}>Delete</li>
                  </ul>
                </li>
              )}
            </ul>
          ))
        ) : (
          <div>
            <h3 className="text-center">No Tasks found!</h3>
          </div>
        )}
      </div>
      {taskToDelete && (
        <ConfirmBox
          isOpen={taskToDelete !== null}
          message={"Are you sure!"}
          onConfirm={() => {
            handleDeleteTask(taskToDelete);
            setTaskToDelete(null);
          }}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
    </div>
  );
};

export default RenderTest;
