import React, { useEffect, useState } from "react";
import products from "../assets/data.js";
import "./Products.css";
import RatingStars from "../components/RatingStars.jsx";
const Products = () => {
  const [productData, setProductData] = useState(products);
  const [productIndex, setProductIndex] = useState(0);
  const [thumbId, setThumbId] = useState(null);
  console.log(productData);
  useEffect(() => {
    console.log(thumbId);
  }, [thumbId]);
  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul className="products-thumb-container">
        {productData.map((product) => (
          <li key={product.id}>
            <div
              className="thumbnail relative"
              onMouseEnter={() => setThumbId(product.id)}
              onMouseLeave={() => setThumbId(null)}
            >
              {thumbId === product.id && (
                <div className="absolute flex flex-col justify-between w-full h-full">
                  <div className="text-2xl text-right py-2 px-3">
                    <span className="watchlist-love">♥</span>
                  </div>
                  <p className="text-center bg-gray-500 text-white py-3">
                    quick view
                  </p>
                </div>
              )}
              <img src={product.images[productIndex]} alt={product.title} />
            </div>
            <div className="product-info">
              <p className="uppercase text-gray-400 text-xs">
                {product.gender}
              </p>
              <p className="text-[18px] font-light text-gray-600">
                {product.title}
              </p>
              <div className="flex justify-start gap-15 items-center">
                <div className="py-2">
                  <RatingStars rating={product.rating} />
                </div>
                <p className="font-bold">${product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
