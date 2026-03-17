import React from "react";

const RatingStars = ({ rating = 0, maxRating = 5 }) => {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div className={`flex items-center space-x-1`}>
      {stars.map((star) => {
        if (star <= rating) {
          // full star
          return (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-blue-500"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.044 9.384c-.784-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          );
        } else if (star - 0.5 <= rating) {
          // half star
          return (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-blue-500"
            >
              <defs>
                <linearGradient id={`half-${star}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                fill={`url(#half-${star})`}
                stroke="currentColor"
                strokeWidth={1}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.044 9.384c-.784-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.957z"
              />
            </svg>
          );
        } else {
          // empty star
          return (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="w-5 h-5 text-blue-500"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.044 9.384c-.784-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          );
        }
      })}
    </div>
  );
};

export default RatingStars;
