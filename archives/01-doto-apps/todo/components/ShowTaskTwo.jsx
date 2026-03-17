import React, { useEffect, useState } from "react";
import "./ShowTasks.css";

const ShowTaskTwo = ({ tasks }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [taskToDelete, setTaskToDelete] = useState(null);

  // filter three different tasks before rendering in the jsx
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Active") return !task.isCompleted;
    if (activeFilter === "Completed") return task.isCompleted;
    return true;
  });

  const formatDate = (date) => {
    return new Date(date).toLocaleString("us-en", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    console.log(tasks);
    // console.log(filteredTasks);
  }, []);
  useEffect(() => {
    console.log(taskToDelete);
  }, [taskToDelete]);

  return (
    <div className="show-tasks-container pt-10 mt-10 border-t border-amber-600">
      <h1 className="text-center">Show task Two</h1>
      <div className="show-tasks-container mt-5">
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
      </div>
      <div className="task-list-container">
        {filteredTasks.length ? (
          filteredTasks.map((task) => (
            <ul key={task.id}>
              <li>
                <div>
                  <h3>{task.text}</h3>
                  <p>{task.isCompleted ? "Completed" : "Not Completed"}</p>
                  <p>{formatDate(task.createdAt)}</p>
                </div>
                <ul className="task-settings">
                  <li>Edit</li>
                  <li onClick={() => setTaskToDelete(task.id)}>Delete</li>
                </ul>
              </li>
            </ul>
          ))
        ) : (
          <h1>No task found</h1>
        )}
      </div>
    </div>
  );
};

export default ShowTaskTwo;
