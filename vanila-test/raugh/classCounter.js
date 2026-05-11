class Counter {
  constructor({ count, incBy, decBy }) {
    this.count = count;
    this.incBy = incBy;
    this.decBy = decBy;
  }

  increment(val = this.incBy, max = Infinity) {
    const step = Number(val);
    const amount = Number.isNaN(step) ? this.incBy : step;
    this.count = Math.min(this.count + amount, max);
    return this.count;
  }

  decrement(val = this.decBy, min = 0) {
    const step = Number(val);
    const amount = Number.isNaN(step) ? this.decBy : val;
    this.count = Math.max(this.count - amount, min);
    return this.count;
  }
}

const btnIncrement = document.createElement("button");
const btnDecrement = document.createElement("button");
btnIncrement.textContent = "Increment";
btnDecrement.textContent = "Decrement";

// display area
const display = document.createElement("h1");
document.body.append(display);

// render
function render() {
  display.textContent = `Count is: ${counter.count}`;
}

const counter = new Counter({ count: 0, incBy: 1, decBy: 1 });

display.textContent = `Count is: ${counter.count}`;

document.body.append(btnDecrement, btnIncrement);

console.log(`Count is: ${counter.count}`);

[btnIncrement, btnDecrement].forEach((eachBtn) => {
  eachBtn.addEventListener("click", (e) => {
    if (e.target.innerText === "Increment") {
      counter.increment(1, 10);
      render();
    }
    if (e.target.innerText === "Decrement") {
      counter.decrement(1);
      render();
    }
  });
});
