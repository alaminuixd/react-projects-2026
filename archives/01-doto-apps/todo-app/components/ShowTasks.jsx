import React, { useState } from "react";
import "./ShowTasks.css";
import CreateTask from "./CreateTask";

const ShowTasks = ({ tasks, deleteTask, setUpdate }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  return (
    <div className="show-tasks-container">
      <div className="task-filter-container">
        <ul>
          {["All", "Active", "Completed"].map((current) => {
            return (
              <li
                key={current}
                className={activeFilter === current ? "active-filter" : ""}
                onClick={() => {
                  setActiveFilter(current);
                  console.log(current);
                }}
              >
                {current}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="task-list-container">
        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => {
              return (
                <ul className="each-task" key={task.id}>
                  <li>
                    <div>
                      <h3>Task: {task.text}</h3>
                      <p>
                        Status:{" "}
                        {task.isCompleted ? "Completed" : "Not completed"}
                      </p>
                      <p>Date: {String(task.createdAt)}</p>
                    </div>
                    <ul className="task-settings">
                      <li onClick={() => setUpdate(true)}>Edit</li>
                      <li onClick={() => deleteTask(task.id)}>Delete</li>
                    </ul>
                  </li>
                </ul>
              );
            })}
          </div>
        ) : (
          <h2>No task found</h2>
        )}
      </div>
    </div>
  );
};

export default ShowTasks;
