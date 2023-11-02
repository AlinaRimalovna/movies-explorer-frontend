import React from 'react';

function InfoTooltip({ isOpen, onClose, text }) {
  return (
    <>
      <div className={`popup ${isOpen ? "popup_opened" : ""}`}  >
        <div className="popup__container">
          <div className="popup__register">
            <p className="popup__register-heading">{text}</p>
          </div>
          <button className="popup__close-icon" onClick={onClose} type="button">
          </button>
        </div>
      </div>
    </>
  );
}
export default InfoTooltip;