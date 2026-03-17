import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import products from "../assets/data.js";
import RatingStars from "../components/RatingStars.jsx";
import { formatPrice } from "../utils/format/formatPrice.js";
import QuantitySelector from "../components/QuantitySelector.jsx";
import { capitalizeFirst } from "../utils/string/capitalizeFirst.js";
import SocialShare from "../components/SocialShare.jsx";
import "./ProductDetails.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaExpandAlt } from "react-icons/fa";
import ProductImageModal from "../components/ProductImageModal.jsx";
import ProductDetailsTab from "../components/ProductDetailsTab.jsx";

const ProductDetails = () => {
  const [productIndex, setProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // track quantity
  const [showModal, setShowModal] = useState(false);
  // const [activeFilter, setActiveFilter] = useState("Description");
  // other hooks
  const { id } = useParams();
  const { pathname } = useLocation();

  const shareUrl = `${window.location.origin}${pathname}`;
  const product = products.find((p) => String(p.id) === id);
  const categories = product.categories ?? [];

  const breadcrumb = product.breadcrumb;

  // Handler functions
  // Add to Cart handler
  const handleAddToCart = () => {
    // The cart logic will be here
    console.log("Add to cart:", product.title, "Quantity:", quantity);
  };
  const handlePrevImg = () => {
    setProductIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const handleNextImg = () => {
    setProductIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };
  useEffect(() => {
    console.log(showModal);
  }, [showModal]);
  useEffect(() => {
    console.log(productIndex);
  }, [productIndex]);

  if (!product) return <h2>Product not found</h2>;
  return (
    <>
      <ProductImageModal
        product={product}
        productIndex={productIndex}
        setProductIndex={setProductIndex}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className="product-details-container">
        <div className="section-1">
          {/* Product image */}
          <div className="product-image-container">
            <div className="product-image-main group">
              <button
                className="zoom group/zoom"
                onClick={() => setShowModal(true)}
              >
                <FaExpandAlt />
                <span>Zoom</span>
              </button>

              <button
                className="left-arrow group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImg();
                }}
              >
                <FaArrowLeft />
              </button>

              <button
                className="right-arrow group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImg();
                }}
              >
                <FaArrowRight />
              </button>

              <img
                className="w-full md:h-140 object-cover"
                src={product.images[productIndex]}
                alt={product.title}
                onClick={() => {
                  console.log("working?");
                  setShowModal(true);
                }}
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={product.title}
                  className={`cursor-pointer object-cover ${
                    index === productIndex
                      ? "border border-blue-300"
                      : "opacity-50"
                  }`}
                  onClick={() => setProductIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="w-full border border-gray-200 p-4 text-gray-600">
            <ul className="breadcrumb">
              {breadcrumb.length > 0
                ? breadcrumb.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>{item.text}</Link>
                      <span>{index !== breadcrumb.length - 1 ? "/" : ""}</span>
                    </li>
                  ))
                : ""}
            </ul>
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <div className="mt-3">
              <RatingStars rating={product.rating} />
            </div>
            <p className="text-3xl font-semibold mt-2 flex items-end gap-3 text-gray-800">
              <span className="text-lg font-medium text-gray-500 line-through">
                ${formatPrice(product.prices.regular)}
              </span>
              <span className="flex items-start">
                <span className="text-[25px] mr-0.5">$</span>
                {formatPrice(product.prices.sale)}
              </span>
            </p>

            <p className="my-3">{product.description}</p>

            {/* Cart area */}
            <div className="flex items-center gap-4 my-4">
              <QuantitySelector
                product={product}
                initial={quantity}
                onChange={setQuantity}
              />
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 cursor-pointer"
              >
                Add To Cart
              </button>
            </div>
            <div className="flex text-sm mb-1 font-light gap-2">
              <span>Categories:</span>
              {categories.length > 0 && (
                <ul className="flex gap-1">
                  {categories.map((item, index) => (
                    <li key={item.id || index}>
                      <Link to={item.link}>
                        {capitalizeFirst(item.text)}
                        {index < categories.length - 1 && ", "}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <p className="text-sm font-light">
              Tags: {capitalizeFirst(product.tags).join(", ")}
            </p>
            <div className="social-share mt-5">
              <SocialShare
                url={shareUrl}
                title={product.title}
                items={[
                  "facebook",
                  "x",
                  "linkedin",
                  "reddit",
                  "pinterest",
                  "whatsapp",
                  "telegram",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="section-2 tabs"></div>
      </div>
    </>
  );
};

export default ProductDetails;
