import React from "react";

const CommentList = ({ comment }) => {
  return (
    <div>
      <div className="font-bold flex items-center gap-2 mb-2">
        <span className="bg-white shadow-md px-1.5 py-1 rounded-full">
          {comment.user.avatar}
        </span>
        <p>{comment.user.name}</p>
      </div>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentList;
