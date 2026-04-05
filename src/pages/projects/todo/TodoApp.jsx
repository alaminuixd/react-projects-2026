import React from "react";
import todoTaskData from "./todoTaskData";
import "./TodoApp.css";
import CommentList from "./todoComp/CommentList";
import TodoCard from "./todoComp/TodoCard";
const TodoApp = () => {
  const { createdAt, subtitle, tags, comments, tasks } = todoTaskData;

  return (
    <div className="todo-app-container">
      <h1 className="text-center">TodoApp</h1>
      <div className="card-container mx-auto mt-10 flex gap-10 justify-self-start">
        {todoTaskData.length &&
          todoTaskData.map((data) => (
            <>
              <TodoCard key={data.id} {...data} />
            </>
          ))}
      </div>
    </div>
  );
};

export default TodoApp;
