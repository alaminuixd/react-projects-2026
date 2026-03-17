import React, { useEffect } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ProductImageModal = ({
  product,
  productIndex,
  showModal,
  setShowModal,
  handlePrevImg,
  handleNextImg,
}) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = showModal ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  return (
    <div
      /* Need to fullscreen only this dive */
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
      onClick={() => setShowModal(false)}
    >
      <div className="absolute top-controles top-5 right-5 text-white flex items-center gap-5">
        <button onClick={() => document.documentElement.requestFullscreen()}>
          <FaExpandArrowsAlt />
        </button>

        <button onClick={() => setShowModal(false)}>✕</button>
      </div>
      {/* Left Arrow */}
      <button
        className="absolute left-6 text-white text-3xl cursor-pointer border border-gray-500 rounded-full p-5"
        onClick={(e) => {
          e.stopPropagation();
          handlePrevImg();
        }}
      >
        <FaArrowLeft />
      </button>
      {/* Right Arrow */}
      <button
        className="absolute right-6 text-white text-3xl cursor-pointer border border-gray-500 rounded-full p-5"
        onClick={(e) => {
          e.stopPropagation();
          handleNextImg();
        }}
      >
        <FaArrowRight />
      </button>
      {/*  */}
      <div
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // 👈 block inner clicks
      >
        {/* Image */}
        <img
          src={product.images[productIndex]}
          alt={product.title}
          className="max-h-[90vh] max-w-[90vw] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductImageModal;
