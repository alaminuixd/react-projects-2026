const container = document.getElementById("container");

const heading1 = document.createElement("h3");
const btnOne = document.createElement("button");
const btnTwo = document.createElement("button");

// Simple useState for vanilla JS
function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    render(); // re-render whenever state updates
  }

  return [() => state, setState];
}

// Initialize state object
const [count, setCount] = useState({ a: "", b: "" });

// Apply CSS to buttons
function applyCSSToBtn(items = []) {
  if (!items.length) throw new Error("Items can't be empty");
  items.forEach((item, index) => {
    item.style.cssText = `
      padding: 15px 45px; 
      cursor: pointer; 
      border:none; 
      background: #000; 
      color: #FFF;
      font-size:17px;
      font-weight: 600;
      font-family: Poppins, Arial;
      border-radius: 40px;
    `;
    if (index !== items.length - 1) {
      item.style.marginRight = "20px";
      item.style.marginLeft = "20px";
    }
  });
}

applyCSSToBtn([btnOne, btnTwo]);

container.append(heading1, btnOne, btnTwo);

btnOne.textContent = "Update One";
btnTwo.textContent = "Update Two";

btnOne.dataset.a = "I am button One";
btnTwo.dataset.b = "I am button Two";

// Handle state updates
function handleInputObj(obj) {
  setCount({
    ...count(),
    ...obj,
  });
}

// Event listeners
btnOne.addEventListener("click", (e) =>
  handleInputObj({
    [Object.keys(e.target.dataset)[0]]: e.target.dataset.a,
  }),
);

btnTwo.addEventListener("click", (e) =>
  handleInputObj({
    [Object.keys(e.target.dataset)[1]]: e.target.dataset.b,
  }),
);

// Render function to update the DOM
function render() {
  const state = count();
  heading1.textContent = `a: ${state.a} | b: ${state.b}`;
  console.log(count());
}

// Initial render
render();
