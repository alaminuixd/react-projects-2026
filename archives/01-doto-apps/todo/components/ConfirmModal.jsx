import React from "react";
import "./ConfirmModal.css";

const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;
  const handleBackdropClick = (e) => {
    // If the user clicked directly on the overlay (not the modal box)
    if (e.target === e.currentTarget) {
      console.log(e.currentTarget);
      onCancel();
    }
  };
  return (
    <div className="confirmModalContainer" onClick={handleBackdropClick}>
      <div className="confirmModalBox">
        <p className="confirmMessage">{message}</p>

        <div className="confirmButtons">
          <button className="confirmYesBtn" onClick={onConfirm}>
            Yes
          </button>
          <button className="confirmNoBtn" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
