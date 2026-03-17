import React from "react";
import { Outlet } from "react-router-dom";
import products from "../assets/data.js";
import "./Products.css";
import ProductCard from "../components/ProductCard.jsx";

const MenProducts = () => {
  const menProducts = products.filter((item) => item.gender === "men");
  return (
    <div className="products-container">
      <h1>Men Products</h1>
      <ul className="products-thumb-container">
        {menProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default MenProducts;
