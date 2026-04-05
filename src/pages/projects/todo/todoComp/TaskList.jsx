import React from "react";

const TaskList = ({ task }) => {
  return (
    <div className="my-6">
      <div className="font-bold">
        <span></span>
        {task.title}
      </div>
      <p>{task.text}</p>
    </div>
  );
};

export default TaskList;
