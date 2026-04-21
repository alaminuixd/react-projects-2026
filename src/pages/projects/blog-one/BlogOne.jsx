import React, { useEffect, useRef, useState } from "react";
import useBlogOne from "./hooks/useBlogOne";
import "./BlogOne.css";

const BlogOne = () => {
  const { post, id, setId, loading, cacheRef } = useBlogOne();

  // handler functions
  const handlePrevPost = () => {
    setId(Math.max(id - 1, 1));
  };
  const handleNextPost = () => {
    setId(Math.min(id + 1, 20));
  };

  useEffect(() => console.log(cacheRef.current), [post]);

  const title = post?.title?.trim();
  const body = post?.body?.trim();

  return (
    <div className="blog-one-container">
      <h1 className="font-bold">Blog Posts By Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : post ? (
        <div className="h-[80px]">
          <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
          <p>{body.charAt(0).toUpperCase() + body.slice(1)}</p>
        </div>
      ) : (
        <p>No post available</p>
      )}
      <div>
        <button onClick={handlePrevPost}>Previous</button>
        <button onClick={handleNextPost}>Next</button>
      </div>
    </div>
  );
};

export default BlogOne;
