import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ListItem = ({ title, name, checked, setIsChecked }) => {
  return (
    <li className="flex gap-4 items-center mb-3">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={setIsChecked}
      />
      <p>{title}</p>
      <button className="bg-gray-700 text-white px-5 py-1 rounded-full cursor-pointer">
        Delete
      </button>
    </li>
  );
};

const listData = [
  {
    id: uuidv4(),
    title: "From Bangladesh",
    checked: false,
  },
  {
    id: uuidv4(),
    title: "School Student",
    checked: true,
  },
  {
    id: uuidv4(),
    title: "College Student",
    checked: true,
  },
  {
    id: uuidv4(),
    title: "University Student",
    checked: false,
  },
];

const CheckList = () => {
  const [lists, setLists] = useState(listData);

  const toggleChecked = (id) => {
    setLists((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <h1 className="text-center">CheckList</h1>

      <ul className="mt-10">
        {lists.map((list) => (
          <ListItem
            key={list.id}
            title={list.title}
            name={list.title.replace(/\s+/g, "_").toLowerCase()}
            checked={list.checked}
            setIsChecked={() => toggleChecked(list.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default CheckList;
