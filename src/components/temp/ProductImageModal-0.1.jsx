import React, { useEffect, useRef, useState } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMagnifyingGlassMinus,
  FaMagnifyingGlassPlus,
} from "react-icons/fa6";

const ProductImageModal = ({
  product,
  productIndex,
  showModal,
  setShowModal,
  handlePrevImg,
  handleNextImg,
}) => {
  const [zoomIn, setZoomIn] = useState(false);
  const modalRef = useRef(null);

  // New state variables for dragging functionality
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Reset zoom and position whenever the user switches images
  useEffect(() => {
    setZoomIn(false);
    setPosition({ x: 0, y: 0 });
  }, [productIndex]);

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

  const handleToggleFullscreen = (e) => {
    e.stopPropagation();

    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleToggleZoom = (e) => {
    e.stopPropagation();
    if (zoomIn) {
      // Reset position to center when zooming out
      setPosition({ x: 0, y: 0 });
    }
    setZoomIn(!zoomIn);
  };

  // --- DRAG HANDLER FUNCTIONS ---
  const handleMouseDown = (e) => {
    if (!zoomIn) return;
    e.preventDefault(); // Stops the browser's default "ghost" image dragging
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !zoomIn) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={modalRef}
      // Added overflow-hidden to prevent scrollbars from appearing when dragging the huge image
      className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center overflow-hidden"
      onClick={() => setShowModal(false)}
      // We attach move and up events to the main container so dragging doesn't break if you move your mouse quickly outside the image bounds
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute top-5 right-5 text-white flex items-center gap-5 z-[10000]">
        {/* Zoom button */}
        <button
          onClick={handleToggleZoom}
          className="cursor-pointer text-xl p-2"
        >
          {zoomIn ? <FaMagnifyingGlassMinus /> : <FaMagnifyingGlassPlus />}
        </button>
        {/* fullscreen button */}
        <button
          className="cursor-pointer text-xl p-2"
          onClick={handleToggleFullscreen}
        >
          <FaExpandArrowsAlt />
        </button>

        {/* Close button */}
        <button
          className="cursor-pointer text-2xl p-2"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          ✕
        </button>
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-6 text-white text-xl cursor-pointer border border-gray-500 rounded-full p-5 z-[10000]"
        onClick={(e) => {
          e.stopPropagation();
          handlePrevImg();
        }}
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-6 text-white text-xl cursor-pointer border border-gray-500 rounded-full p-5 z-[10000]"
        onClick={(e) => {
          e.stopPropagation();
          handleNextImg();
        }}
      >
        <FaArrowRight />
      </button>

      {/* Image Container */}
      <div
        // Added w-full h-full so the flex container covers the screen space
        className="relative flex items-center justify-center w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={product.images[productIndex]}
          alt={product.title}
          onMouseDown={handleMouseDown}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: zoomIn ? (isDragging ? "grabbing" : "grab") : "default",
          }}
          // Disabled transition while dragging to prevent lag/delay
          className={`object-contain ${isDragging ? "" : "transition-all duration-300"} ${
            !zoomIn
              ? "max-h-[90vh] max-w-[90vw]"
              : "max-h-[180vh] max-w-[180vw]"
          }`}
        />
      </div>
    </div>
  );
};

export default ProductImageModal;
