import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./RenderTest2.css";
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
    isCompleted: true,
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

const RenderTest2 = () => {
  const [tasks, setTasks] = useState(data);
  const [currentItem, setCurrentItem] = useState(null);
  const [editId, setEditId] = useState(false);

  useEffect(() => {
    console.log(currentItem);
    console.log(currentItem !== null);
    console.log(`isEditable: ${editId}`);
  }, [currentItem, editId]);

  const handleDeleteConfirm = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setCurrentItem(null);
  };

  return (
    <div className="render-test2-container">
      <ul className="task2-container">
        {tasks.length ? (
          tasks.map((task) => (
            <li key={task.id}>
              {editId ? (
                <div>
                  <input type="text" value={task.text} />
                </div>
              ) : (
                <div>
                  <div>
                    <h3 className="text-blue-600">{task.text}</h3>
                    <p>
                      {task.isCompleted ? (
                        <span className="text-green-600">Completed</span>
                      ) : (
                        <span className="text-yellow-600">Not Completed</span>
                      )}
                    </p>
                    <p className="text-sm">{formatDate(task.createdAt)}</p>
                  </div>
                  <ul>
                    <li onClick={() => setEditId(task.id)}>Edit</li>
                    <li onClick={() => setCurrentItem(task.id)}>Delete</li>
                  </ul>
                </div>
              )}
            </li>
          ))
        ) : (
          <li>No task found</li>
        )}
      </ul>
      <ConfirmBox
        isOpen={currentItem !== null}
        message={`Are you sure you want to delete this task?`}
        onConfirm={() => handleDeleteConfirm(currentItem)}
        onCancel={() => setCurrentItem(null)}
      />
    </div>
  );
};

export default RenderTest2;
