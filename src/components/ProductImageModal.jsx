import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaMagnifyingGlassMinus,
  FaMagnifyingGlassPlus,
} from "react-icons/fa6";

const SCALE = 2;

const ProductImageModal = ({
  product,
  showModal,
  setShowModal,
  productIndex,
  setProductIndex,
}) => {
  const [zoomIn, setZoomIn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastTouch, setLastTouch] = useState(null);

  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const draggedRef = useRef(false);

  const handlePrevImg = useCallback(() => {
    setProductIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  }, [product.images.length, setProductIndex]);

  const handleNextImg = useCallback(() => {
    setProductIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  }, [product.images.length, setProductIndex]);

  // Reset when modal opens or image changes
  useEffect(() => {
    if (showModal) {
      setZoomIn(false);
      setPosition({ x: 0, y: 0 });
      setIsDragging(false);
    }
  }, [productIndex, showModal]);

  // Global listeners
  useEffect(() => {
    if (!showModal) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowModal(false);
      if (e.key === "ArrowLeft") handlePrevImg();
      if (e.key === "ArrowRight") handleNextImg();
    };

    const stopDrag = () => setIsDragging(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchend", stopDrag);
      document.body.style.overflow = "auto";
    };
  }, [showModal, handlePrevImg, handleNextImg, setShowModal]);

  if (!showModal) return null;

  const handleToggleZoom = (e) => {
    e.stopPropagation();
    if (zoomIn) setPosition({ x: 0, y: 0 });
    setZoomIn(!zoomIn);
  };

  const updatePosition = (movementX, movementY) => {
    if (!zoomIn || !wrapperRef.current || !imgRef.current) return;

    const wrapper = wrapperRef.current;
    const imgRect = imgRef.current.getBoundingClientRect();

    const maxX = Math.max(0, (imgRect.width - wrapper.offsetWidth) / 2);
    const maxY = Math.max(0, (imgRect.height - wrapper.offsetHeight) / 2);

    setPosition((prev) => ({
      x: Math.max(-maxX, Math.min(maxX, prev.x + movementX)),
      y: Math.max(-maxY, Math.min(maxY, prev.y + movementY)),
    }));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    draggedRef.current = true;
    updatePosition(e.movementX, e.movementY);
  };

  const handleTouchStart = (e) => {
    if (!zoomIn) return;

    draggedRef.current = false;
    setLastTouch({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    });

    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !lastTouch) return;

    draggedRef.current = true;

    const touch = e.touches[0];

    const movementX = touch.clientX - lastTouch.x;
    const movementY = touch.clientY - lastTouch.y;

    updatePosition(movementX, movementY);

    setLastTouch({
      x: touch.clientX,
      y: touch.clientY,
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center overflow-hidden select-none touch-none"
      onClick={() => !zoomIn && setShowModal(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Controls */}
      <div className="absolute top-5 right-5 text-white flex items-center gap-4 z-[10000]">
        <button
          onClick={handleToggleZoom}
          className="p-2 text-xl hover:text-gray-300 cursor-pointer"
        >
          {zoomIn ? <FaMagnifyingGlassMinus /> : <FaMagnifyingGlassPlus />}
        </button>

        <button
          onClick={() => setShowModal(false)}
          className="p-2 text-2xl hover:text-gray-300 cursor-pointer"
        >
          ✕
        </button>
      </div>

      {!zoomIn && (
        <>
          <button
            className="absolute left-6 text-white p-5 border border-gray-500 rounded-full z-[10000] hover:bg-white/10 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImg();
            }}
          >
            <FaArrowLeft />
          </button>

          <button
            className="absolute right-6 text-white p-5 border border-gray-500 rounded-full z-[10000] hover:bg-white/10 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              handleNextImg();
            }}
          >
            <FaArrowRight />
          </button>
        </>
      )}

      <div
        ref={wrapperRef}
        className="relative w-full bg-white max-w-[350px] md:max-w-[615px] aspect-square md:h-195 flex items-center justify-center overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          ref={imgRef}
          src={product.images[productIndex]}
          alt={product.title}
          draggable="false"
          onMouseDown={(e) => {
            if (!zoomIn) return;
            e.preventDefault();
            draggedRef.current = false;
            setIsDragging(true);
          }}
          onTouchStart={handleTouchStart}
          onClick={() => {
            if (draggedRef.current) return;

            setPosition({ x: 0, y: 0 });
            setZoomIn((prev) => !prev);
          }}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${
              zoomIn ? SCALE : 1
            })`,
            cursor: zoomIn ? (isDragging ? "grabbing" : "grab") : "zoom-in",
          }}
          className={`max-w-full max-h-full object-contain transition-transform ${
            isDragging ? "duration-0" : "duration-200 ease-out"
          }`}
        />
      </div>
    </div>
  );
};

export default ProductImageModal;
