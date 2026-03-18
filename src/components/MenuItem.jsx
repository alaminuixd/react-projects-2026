import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, depth = 0 }) => {
  return (
    <li>
      <Link to={item.link}>{item.text}</Link>

      {item.children.length > 0 && (
        <ul
          className={
            depth === 0
              ? "px-10"
              : depth === 1
                ? "px-5"
                : depth === 2
                  ? "px-5"
                  : ""
          }
        >
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
