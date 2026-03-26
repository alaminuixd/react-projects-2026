import React from "react";

function NotFound() {
  return (
    <div className="w-full max-w-5xl mx-auto h-95 flex text-center justify-center items-center">
      <div>
        <span className="block text-center text-6xl mb-5">😵</span>
        <h1 className="text-5xl! mb-3 font-bold">Not Found!</h1>
        <p>The page you are looking for is not found.</p>
      </div>
    </div>
  );
}

export default NotFound;
