import React from "react";

const varients = {
  primary: {
    backgroundColor: "#2196f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#fff",
  },
  error: {
    backgroundColor: "#f44336",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ff9800",
    color: "#fff",
  },
  info: {
    backgroundColor: "#80d8ff",
    color: "#fff",
  },
};

const sizes = {
  small: {
    padding: "0.5rem 2rem",
  },
  medium: {
    padding: "1rem 3rem",
  },
  large: {
    padding: "1.5rem 5rem",
  },
};

function Button(props) {
  const varient = varients[props.varient];
  const size = sizes[props.size];
  return (
    <button
      style={{
        boxSizing: "border-box",
        border: "none",
        borderRadius: "2rem",
        fontSize: "0.9rem",
        cursor: "pointer",
        ...varient,
        ...size,
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
