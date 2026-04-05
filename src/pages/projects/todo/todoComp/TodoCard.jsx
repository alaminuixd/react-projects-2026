import React from "react";

import { getDay, formatDate, formatDate2 } from "../todo.utils";
import TagList from "./TagList";
import CommentList from "./CommentList";
import TaskList from "./TaskList";

const TodoCard = ({ createdAt, subtitle, tags, comments, tasks }) => {
  return (
    <div className="card w-full bg-gray-50 max-w-100 mx-auto shadow-[0_0_3px_rgba(0,0,0,0.15)] px-10 py-5 rounded-lg">
      <h2>{formatDate(createdAt)}</h2>
      <h3 className="mt-1 text-gray-400">{subtitle}</h3>
      <ul className="my-5 leading-10">
        {tags.map((tag) => (
          <TagList key={tag.key} tag={tag} />
        ))}
      </ul>
      <hr className="border-t border-t-2 mb-6 border-gray-300" />
      <p>Notes linked to people</p>
      <div className="my-6">
        {comments.map((comment) => (
          <CommentList key={comment.id} comment={comment} />
        ))}
      </div>
      <div>
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
