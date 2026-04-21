import ButtonSystem from "./components/ButtonSystem.js";

const container = document.getElementById("container");
const filterUL = document.createElement("ul");

// GLOBAL STATE (WeakMap)
const state = new WeakMap();

// helper
const applyStyle = (el, style) => Object.assign(el.style, style);

// inject dependencies into ButtonSystem
ButtonSystem.init({
  container,
  state,
  applyStyle,
});

const [btnChangeData, btnChangeFilter] = ButtonSystem.create([
  "Change Data",
  "Change Filter",
]);

let filter = "all";
/**
 * Add Classes to the elements
 */
filterUL.setAttribute("class", "filter-container");
/**
 * Add Elements
 */

container.appendChild(filterUL);

const filters = ["all", "home", "office", "business"].map((filter) => {
  const li = document.createElement("li");
  li.setAttribute("class", filter);
  li.innerText = filter;
  filterUL.appendChild(li);
  return li;
});
// add events to the filters
if (Array.isArray(filters)) {
  filters.forEach((btnFilter) => {
    btnFilter.addEventListener("click", (e) => {
      filter = e.target.innerText;
      console.log(filter);
    });
  });
}
