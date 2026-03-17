import React from "react";

const ConfirmBox = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return;
  return (
    <div
      className="confirmModalContainer"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
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

export default ConfirmBox;
