import React, { useEffect, useRef, useState } from "react";

const JqueryTest = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  const cacheRef = useRef({});

  useEffect(() => {
    let isMounted = true;
    console.log(cacheRef.current);

    if (cacheRef.current[id]) {
      setPost(cacheRef.current[id]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;

        setPost(data);
        cacheRef.current[id] = data;
        setLoading(false);
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    // console.log(cacheRef.current);
  }, [post]);

  return (
    <div className="container mt-10 w-full max-w-2xl mx-auto">
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : post ? (
          <div>
            <h5 className="font-bold text-xl">{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>No post found</p>
        )}
      </div>

      <div className="flex gap-5">
        <button
          className="mt-10 bg-blue-600 text-white px-20 py-4 rounded-full cursor-pointer"
          onClick={() => setId((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>

        <button
          className="mt-10 bg-blue-600 text-white px-20 py-4 rounded-full cursor-pointer"
          onClick={() => setId((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JqueryTest;
