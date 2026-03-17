import { useState, useEffect } from "react";

const QuantitySelector = ({ product, initial, onChange }) => {
  const [quantity, setQuantity] = useState(initial);

  // Sync with parent when quantity changes
  useEffect(() => {
    if (onChange) onChange(quantity);
  }, [quantity, onChange]);

  const increment = () => {
    setQuantity((prev) => Math.min(prev + 1, product.stock));
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-400 cursor-pointer "
        onClick={decrement}
        disabled={quantity === 1}
      >
        -
      </button>
      <span className="w-6 text-center">{quantity}</span>
      <button
        className="px-2 py-1 bg-gray-200 hover:bg-gray-400 cursor-pointer "
        onClick={increment}
        disabled={quantity === product.stock}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
