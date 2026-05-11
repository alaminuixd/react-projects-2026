const container = document.getElementById("container");
const btnContainer = document.getElementById("btn-container");
const btnClick = document.getElementById("btn-click");

let isScaled = false;
let isMouseDown = false;

const btnContRect = btnContainer.getBoundingClientRect();
let currentPosition = { x: btnContRect.x, y: btnContRect.y };

btnClick.addEventListener("click", () => {
  isScaled = !isScaled;

  if (isScaled) {
    btnContainer.style.transform = "scale(2)";
    btnContainer.style.cursor = "grab";
  } else {
    btnContainer.style.transform = "scale(1)";
    btnContainer.style.cursor = "default";
    btnContainer.style.position = "static";
    btnContainer.style.transition = "all 0.3s";
  }
});

btnContainer.addEventListener("mousedown", () => {
  if (isScaled) {
    isMouseDown = true;
    btnContainer.style.cursor = "grabbing";
  }
});

document.addEventListener("mousemove", (e) => {
  if (isMouseDown) {
    btnContainer.style.position = "absolute";
    btnContainer.style.left = e.clientX + "px";
    btnContainer.style.top = e.clientY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
  if (isScaled) btnContainer.style.cursor = "grab";
});
