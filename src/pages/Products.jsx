import React from "react";
import { Outlet } from "react-router-dom";
import products from "../assets/data.js";
import "./Products.css";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul className="products-thumb-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      <Outlet /> {/* 👈 MenProducts will render here */}
    </div>
  );
};

export default Products;
