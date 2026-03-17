import React, { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import { v4 as uuidv4 } from "uuid";
import ShowTasks from "./components/ShowTasks";
import "./Todo.css";
import UpdateTask from "./components/UpdateTask.";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(true);
  const [update, setUpdate] = useState(false);
  const addNewTask = (text) => {
    const taskObj = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: uuidv4(),
    };
    setTasks((prev) => [...prev, taskObj]);
  };
  const deleteTask = (id) => {
    return setTasks((prev) => prev.filter((p) => p.id !== id));
  };
  const updateTask = (id) => {
    alert(id);
  };
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  console.log(update);
  return (
    <div className="wrapper">
      {!update ? (
        <div>
          <h1 className="text-center">Todo Tasks</h1>
          <CreateTask addNewTask={addNewTask} />
          <ShowTasks
            tasks={tasks}
            deleteTask={deleteTask}
            setUpdate={setUpdate}
          />
        </div>
      ) : (
        <UpdateTask updateTask={updateTask} setUpdate={setUpdate} />
      )}
    </div>
  );
};

export default Todo;
