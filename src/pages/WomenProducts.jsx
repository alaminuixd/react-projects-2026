import React from "react";
import products from "../assets/data.js";
import "./Products.css";
import ProductCard from "../components/ProductCard.jsx";

const WomenProducts = () => {
  const menProducts = products.filter((item) => item.gender === "women");
  return (
    <div className="products-container">
      <h1>Women Products</h1>
      <ul className="products-thumb-container">
        {menProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default WomenProducts;
