const container = document.getElementById("container");
const btnContainer = document.getElementById("btn-container");
const btnClick = document.getElementById("btn-click");

btnContainer.addEventListener("click", btnContainerHandler);
btnClick.addEventListener("click", btnClickHandler);
container.addEventListener("click", containerHandler);

let containerToggle = false;
let btnContainerToggle = false;
let btnToggle = false;
const btnContRect = btnContainer.getBoundingClientRect();
let currentPosition = { x: btnContRect.x, y: btnContRect.y };

function containerHandler(e) {
  //   e.stopPropagation();
  containerToggle = !containerToggle;
  if (containerToggle) {
    container.style.backgroundColor = "green";
  } else {
    container.style.backgroundColor = "";
  }
}

function btnContainerHandler(e) {
  //   e.stopPropagation();
  btnContainerToggle = !btnContainerToggle;
  if (btnContainerToggle) {
    btnContainer.style.backgroundColor = "blue";
  } else {
    btnContainer.style.backgroundColor = "";
  }
}

function btnClickHandler(e) {
  e.stopPropagation();
  btnToggle = !btnToggle;
  if (btnToggle) {
    btnClick.style.backgroundColor = "red";
  } else {
    btnClick.style.backgroundColor = "";
  }
}
