const container = document.getElementById("container");

// 1. reusable style applier
const applyStyle = (el, style) => Object.assign(el.style, style);

// 2. create buttons (scales to ANY amount)
const createButtons = (labels) =>
  labels.map((text) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    return btn;
  });

// 3. base styles (same for all)
const buttonStyle = {
  border: "none",
  padding: "15px 40px",
  cursor: "pointer",
  borderRadius: "30px",
  backgroundColor: "#333",
  color: "#FFF",
  fontFamily: "Poppins, Arial",
  fontSize: "17px",
  fontWeight: "bold",
};

// 4. event styles
const eventStyles = {
  mouseover: { backgroundColor: "#222" },
  mouseout: { backgroundColor: "#333" },
  mousedown: { backgroundColor: "#333" },
  mouseup: { backgroundColor: "#222" },
};

// 5. apply hover/press behavior
const addEvents = (buttons) => {
  Object.entries(eventStyles).forEach(([event, style]) => {
    buttons.forEach((btn) => {
      btn.addEventListener(event, (e) => {
        applyStyle(e.currentTarget, {
          ...style,
          transition: "all",
        });
      });
    });
  });
};

// 6. setup
const labels = ["Change Data", "Change Filter"];
const buttons = createButtons(labels);

// apply base style + custom marginRight
buttons.forEach((btn, i) => {
  applyStyle(btn, {
    ...buttonStyle,
    marginRight: i !== buttons.length - 1 ? "10px" : "0",
  });
});

// attach events
addEvents(buttons);

// render
container.append(...buttons);
