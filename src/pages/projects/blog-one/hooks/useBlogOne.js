import React, { useState, useEffect, useRef } from "react";

export default function useBlogOne() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(false);

  const cacheRef = useRef({});

  // utility functions
  const fetchUser = async (id) => {
    try {
      // Fetch the poset by id
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      // Convert data (JSN to JS object)
      const data = await response.json();
      // insert the data into the cacheRef.current object {1: {...data}}
      cacheRef.current[id] = data;
      // return the data
      return data;
    } catch (error) {
      // return if any errors
      console.log(error);
    }
  };

  // UseEffect hooks
  useEffect(() => {
    // If cacheRef.current object already has an item with that id then push that item into "post" an return
    if (cacheRef.current[id]) {
      setPost(cacheRef.current[id]);
      return;
    }
    // Otherwise: loading will be true, and fetch the post item from the API and push it
    setLoading(true);
    fetchUser(id)
      .then((data) => {
        setPost(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (id < 20) {
      if (!cacheRef.current[id + 1]) {
        fetchUser(id + 1);
      }
      if (!cacheRef.current[id + 2] && id + 2 <= 20) {
        fetchUser(id + 2);
      }
    }
  }, [id]);

  return {
    post,
    id,
    setId,
    loading,
    cacheRef,
  };
}
