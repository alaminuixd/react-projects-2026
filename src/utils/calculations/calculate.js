export function calculate(a, b, operator) {
  const operations = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => {
      if (y === 0) throw new Error("Division by zero is not allowed");
      return x / y;
    },
    modulus: (x, y) => x % y,
    power: (x, y) => x ** y,
  };

  if (!operations[operator]) {
    throw new Error(`Invalid operator: ${operator}`);
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }

  return operations[operator](a, b);
}
