import React, { useState, useRef } from "react";
import pic_1 from "../assets/1/product1.jpeg";
import "./Dragable.css";
import { FaMagnifyingGlassMinus, FaMagnifyingGlassPlus } from "react-icons/fa6";

const Dragable = () => {
  const wrapperRef = useRef(null);

  const [zoom, setZoom] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState(true);
  // enable dragging process (draggina = true) only if element is zoomedIn
  const handleMouseDown = (e) => {
    if (!zoom) return;
    e.preventDefault();
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!zoom || !dragging) return;

    const wrapper = wrapperRef.current;
    const rect = wrapper.getBoundingClientRect();
    // We scalled the image by 2 in the ".dragable-img-wrapper" which makes it twice the size, so max drag is half of wrapper
    const maxX = rect.width / 2;
    const maxY = rect.height / 2;

    setPosition((prev) => {
      let newX = prev.x + e.movementX;
      let newY = prev.y + e.movementY;
      // x can move by (-maxX) and up to the newX
      newX = Math.max(-maxX, Math.min(maxX, newX));
      // x can move by (-maxY) and up to the newY
      newY = Math.max(-maxY, Math.min(maxY, newY));
      return { x: newX, y: newY };
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const toggleZoom = () => {
    setZoom((p) => !p);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setFullscreen((p) => !p);
          console.log(e.target);
        }
      }}
      className={`bg-blue-400 ${
        fullscreen
          ? "dragable-container-active"
          : "dragable-container-non-active"
      }`}
    >
      <div
        className="dragable-container relative"
        onClick={(e) => e.stopPropagation()}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="absolute text-xl cursor-pointer z-40 text-white bg-amber-600 p-3 border border-gray-600 rounded-full"
          onClick={toggleZoom}
        >
          {!zoom ? <FaMagnifyingGlassPlus /> : <FaMagnifyingGlassMinus />}
        </div>

        <div ref={wrapperRef} className="dragable-img-wrapper overflow-hidden">
          <img
            src={pic_1}
            alt="Demo"
            onMouseDown={handleMouseDown}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${
                zoom ? 2 : 1
              })`,
              cursor: zoom ? (dragging ? "grabbing" : "grab") : "default",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dragable;
