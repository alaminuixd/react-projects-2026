import { v4 as uuidv4 } from "uuid";
const todoTaskData = [
  {
    id: uuidv4(),
    subtitle: "The subtitle for the task.",
    createdAt: new Date(1775247088110).toISOString(),
    tags: [
      {
        id: uuidv4(),
        type: "done",
        text: "It's done",
        icon: "✅",
      },
      {
        id: uuidv4(),
        type: "cancelled",
        text: "It's cancelled",
        icon: "❌",
      },
      {
        id: uuidv4(),
        type: "progress",
        text: "In progress",
        icon: "⏳",
      },
      {
        id: uuidv4(),
        type: "just",
        text: "Just wrote this",
        icon: "✏️",
      },
    ],
    comments: [
      {
        id: uuidv4(),
        user: {
          id: uuidv4(),
          avatar: "👤",
          name: "Person 1",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    tasks: [
      {
        id: uuidv4(),
        title: "Foggy Nelson",
        text: "Here to clean the streets of Hells kitchen",
        status: "done",
      },
      {
        id: uuidv4(),
        title: "Louis CK",
        text: "This one is cancelled",
        status: "cancelled",
      },
      {
        id: uuidv4(),
        title: "Albert Einstein",
        text: "Illum nihil corporis eveniet",
        status: "progress",
      },
    ],
  },
  {
    id: uuidv4(),
    subtitle: "The subtitle for the task.",
    createdAt: new Date().toISOString(),
    tags: [
      {
        id: uuidv4(),
        type: "done",
        text: "It's done",
        icon: "✅",
      },
      {
        id: uuidv4(),
        type: "cancelled",
        text: "It's cancelled",
        icon: "❌",
      },
      {
        id: uuidv4(),
        type: "progress",
        text: "In progress",
        icon: "⏳",
      },
      {
        id: uuidv4(),
        type: "just",
        text: "Just wrote this",
        icon: "✏️",
      },
    ],
    comments: [
      {
        id: uuidv4(),
        user: {
          id: uuidv4(),
          avatar: "👤",
          name: "Person 1",
        },
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],
    tasks: [
      {
        id: uuidv4(),
        title: "Foggy Nelson",
        text: "Here to clean the streets of Hells kitchen",
        status: "done",
      },
      {
        id: uuidv4(),
        title: "Louis CK",
        text: "This one is cancelled",
        status: "cancelled",
      },
      {
        id: uuidv4(),
        title: "Albert Einstein",
        text: "Illum nihil corporis eveniet",
        status: "progress",
      },
    ],
  },
];

export default todoTaskData;
