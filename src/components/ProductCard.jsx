import React, { useState } from "react";
import RatingStars from "../components/RatingStars.jsx";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [productIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li>
      <Link to={`/products/${product.id}`}>
        <div
          className="thumbnail relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
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
          <p className="uppercase text-gray-400 text-xs">{product.gender}</p>
          <p className="text-[18px] font-light text-gray-600">
            {product.title}
          </p>

          <div className="flex justify-start gap-12 items-center">
            <div className="py-2">
              <RatingStars rating={product.rating} />
            </div>

            <p className="font-bold flex gap-2">
              <span className="line-through font-normal text-gray-400">
                ${product.prices.regular}
              </span>{" "}
              <span>${product.prices.sale}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductCard;
