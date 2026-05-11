const container = document.getElementById("container");

// core style applier
const applyStyle = (el, style) => Object.assign(el.style, style);

// button factory
const createButton = (text) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  return btn;
};

// default config (THIS is your “framework API”)
const ButtonSystem = {
  baseStyle: {
    border: "none",
    padding: "15px 40px",
    cursor: "pointer",
    borderRadius: "30px",
    backgroundColor: "#333",
    color: "#FFF",
    fontFamily: "Poppins, Arial",
    fontSize: "17px",
    fontWeight: "bold",
    transition: "all",
  },

  eventStyles: {
    mouseover: { backgroundColor: "#222" },
    mouseout: { backgroundColor: "#333" },
    mousedown: { backgroundColor: "#333" },
    mouseup: { backgroundColor: "#222" },
  },

  spacing(el, index, total) {
    return {
      marginRight: index === total - 1 ? "0" : "10px",
    };
  },

  create(labels) {
    const buttons = labels.map(createButton);

    const total = buttons.length;

    buttons.forEach((btn, i) => {
      // base + spacing
      applyStyle(btn, {
        ...this.baseStyle,
        ...this.spacing(btn, i, total),
      });

      // attach events (no duplication per button)
      for (const [event, style] of Object.entries(this.eventStyles)) {
        btn.addEventListener(event, (e) => {
          applyStyle(e.currentTarget, style);
        });
      }
    });

    return buttons;
  },
};

// usage (super clean)
const buttons = ButtonSystem.create([
  "Change Data",
  "Change Filter",
  "Extra",
  "More",
]);

container.append(...buttons);
