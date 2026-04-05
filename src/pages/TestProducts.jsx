import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const productData = [
  {
    id: uuidv4(),
    title: "Keyboard",
    stock: 10,
    price: 30,
  },
  {
    id: uuidv4(),
    title: "Mouse",
    stock: 15,
    price: 12,
  },
  {
    id: uuidv4(),
    title: "Monitor",
    stock: 5,
    price: 350,
  },
  {
    id: uuidv4(),
    title: "Headphone",
    stock: 12,
    price: 17,
  },
];

const ProdCard = ({ product, onUpdate, onInc, onDec }) => {
  const { id, title, price, stock, quantity, total } = product;

  return (
    <div className="space-y-2 w-full max-w-[350px] shadow-[0_1px_3px_rgba(0,0,0,0.2)] p-5 rounded-md">
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Total Stock: {stock}</p>
      <p>Total: ${total}</p>

      <div className="flex justify-around gap-2 mt-5">
        <button
          onClick={() => onDec(id)}
          className="cursor-pointer btn-enhance"
          disabled={quantity === 0}
        >
          -
        </button>

        <p>{quantity}</p>

        <button
          onClick={() => onInc(id)}
          className="cursor-pointer btn-enhance"
          disabled={quantity === stock}
        >
          +
        </button>
      </div>
    </div>
  );
};

const TestProducts = () => {
  const [products, setProducts] = useState(
    productData.map((p) => ({
      ...p,
      quantity: 0,
      total: 0,
    })),
  );

  const updateQuantity = (id, type) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;

        let newQty = p.quantity;

        if (type === "inc" && p.quantity < p.stock) {
          newQty++;
        } else if (type === "dec" && p.quantity > 0) {
          newQty--;
        }

        return {
          ...p,
          quantity: newQty,
          total: newQty * p.price,
        };
      }),
    );
  };

  const updateQ = (id, type) => {
    setProducts((prev) => {
      return prev.map((p) => {
        if (p.id !== id) return p;

        let newQty = p.quantity;
        if (type === "inc" && p.quantity < p.stock) {
          newQty++;
        } else if (type === "dec" && p.quantity > 0) {
          newQty--;
        }
        return {
          ...p,
          quantity: newQty,
          total: newQty * p.price,
        };
      });
    });
  };

  const incrementProduct = (id) => {
    setProducts((prev) => {
      return prev.map((p) => {
        console.log(p);
        if (p.id !== id) return p;
        let newQuantity = p.quantity;
        if (p.quantity < p.stock) {
          newQuantity++;
        }
        return {
          ...p,
          quantity: newQuantity,
          total: newQuantity * p.price,
        };
      });
    });
  };

  const decrementProduct = (id) => {
    setProducts((prev) => {
      return prev.map((p) => {
        console.log(p);
        if (p.id !== id) return p;
        let newQuantity = p.quantity;
        if (p.quantity > 0) {
          newQuantity--;
        }
        return {
          ...p,
          quantity: newQuantity,
          total: newQuantity * p.price,
        };
      });
    });
  };

  const totalPrice = products.reduce((total, curr) => {
    total += curr.total;
    return total;
  }, 0);

  console.log(totalPrice);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-center my-10">TestProducts</h1>

      <div className="flex gap-10 justify-between">
        {products.length > 0 ? (
          products.map((product) => (
            <ProdCard
              key={product.id}
              product={product}
              onUpdate={updateQ}
              onInc={incrementProduct}
              onDec={decrementProduct}
            />
          ))
        ) : (
          <h2>No products found!</h2>
        )}
      </div>
      {totalPrice > 0 && (
        <h2 className="mt-10 text-center">Total: {totalPrice}</h2>
      )}
    </div>
  );
};

export default TestProducts;
