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
  },

  init({ container, state, applyStyle }) {
    this.container = container;
    this.state = state;
    this.applyStyle = applyStyle;
  },

  spacing(index, total) {
    return {
      marginRight: index === total - 1 ? "0" : "10px",
    };
  },

  initEvents(container) {
    container.addEventListener("mouseover", (e) => {
      if (!e.target.matches("button")) return;
      this.applyStyle(e.target, { backgroundColor: "#222" });
      this.state.set(e.target, "hover");
    });

    container.addEventListener("mouseout", (e) => {
      if (!e.target.matches("button")) return;
      this.applyStyle(e.target, { backgroundColor: "#333" });
      this.state.set(e.target, "idle");
    });

    container.addEventListener("mousedown", (e) => {
      if (!e.target.matches("button")) return;
      this.applyStyle(e.target, { backgroundColor: "#111" });
      this.state.set(e.target, "active");
    });

    container.addEventListener("mouseup", (e) => {
      if (!e.target.matches("button")) return;
      this.applyStyle(e.target, { backgroundColor: "#222" });
      this.state.set(e.target, "hover");
    });
  },

  create(labels) {
    const buttons = labels.map((text, i, arr) => {
      const btn = document.createElement("button");
      btn.innerText = text;

      this.applyStyle(btn, {
        ...this.baseStyle,
        ...this.spacing(i, arr.length),
      });

      this.state.set(btn, "idle");
      return btn;
    });

    this.container.append(...buttons);
    this.initEvents(this.container);

    return buttons;
  },
};

export default ButtonSystem;
