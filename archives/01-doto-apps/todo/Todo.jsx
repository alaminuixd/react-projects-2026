import React, { useEffect, useState } from "react";
import CreateTask from "./components/CreateTask";
import { v4 as uuidv4 } from "uuid";
import ShowTasks from "./components/ShowTasks";
import "./Todo.css";
import ShowTaskTwo from "./components/ShowTaskTwo";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (text) => {
    setTasks((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text,
        isCompleted: false,
        createdAt: new Date(),
      },
    ]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id, updatedText, status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, text: updatedText, isCompleted: status }
          : task,
      ),
    );
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="wrapper">
      <h1 className="text-center">Todo Tasks</h1>
      <CreateTask addNewTask={addNewTask} />
      <ShowTasks
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        updateTask={updateTask}
      />
      <ShowTaskTwo tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Todo;
