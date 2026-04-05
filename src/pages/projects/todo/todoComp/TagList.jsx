import React from "react";
import "./TagList.css";
const TagList = ({ tag }) => {
  const typeStyleClass = {
    done: "done",
    cancelled: "cancelled",
    progress: "progress",
    just: "just",
  };
  return (
    <li
      className={`flex gap-3 items-center border rounded-full px-5 mb-3 ${typeStyleClass[tag.type]}`}
    >
      <small>{tag.icon} </small>
      <p>{tag.text}</p>
    </li>
  );
};

export default TagList;
