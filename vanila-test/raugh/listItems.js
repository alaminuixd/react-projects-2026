const listData = [
  {
    id: 1,
    title: "From Bangladesh",
    value: "",
  },
  {
    id: 2,
    title: "School Student",
    value: "",
  },
  {
    id: 3,
    title: "College Student",
    value: "",
  },
  {
    id: 4,
    title: "University Student",
    value: "",
  },
];

// variables
const container = document.getElementById("container");
const listUL = document.createElement("ul");
container.appendChild(listUL);

listData.forEach((list) => {
  const listItem = document.createElement("li");
  listItem.textContent = list.id + ". " + list.title;
  listUL.append(listItem);
});
