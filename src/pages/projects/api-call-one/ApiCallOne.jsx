import React, { useEffect, useRef, useState } from "react";
import useFetchData from "./hooks/useFetchData";

const ApiCallOne = () => {
  const [userAddress, setUserAddress] = useState([]);
  const {
    data: users,
    loading: userLoading,
    error: userError,
  } = useFetchData("https://jsonplaceholder.typicode.com/users", (users) => {
    const address = users.map((user) => user.address);
    setUserAddress(address);
    return users;
  });

  const {
    data: posts,
    loading: postLoading,
    error: postError,
  } = useFetchData("https://jsonplaceholder.typicode.com/posts", (result) => {
    // console.log(result);
    return result.filter((item) => item);
  });

  useEffect(() => {
    console.log(userAddress);
  }, [userAddress]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <div className="paicallone-container w-full max-w-5xl mx-auto">
      <h1 className="my-5 text-center">API Call One</h1>
      <div className="flex justify-between gap-10">
        <div>
          <h2 className="border-b border-b-gray-500">Users</h2>
          {userLoading && <h3>Loading...</h3>}
          {userError && <h3>{userError}</h3>}
          {users.length > 0 ? (
            users.map((user) => (
              <ul key={user.id} className="my-5">
                <li>
                  <h4>Name: {user.name}</h4>
                </li>
              </ul>
            ))
          ) : (
            <p>No users available</p>
          )}
        </div>
        <div>
          <h2 className="border-b border-b-gray-500">Posts</h2>
          {postLoading && <h3>Loading...</h3>}
          {postError && <h3>{postError}</h3>}
          {posts.length > 0 ? (
            posts.map((post) => (
              <ul key={post.id} className="my-5">
                <li>
                  <h4>Title: {post.title}</h4>
                </li>
              </ul>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiCallOne;
