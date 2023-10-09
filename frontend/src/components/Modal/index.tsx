import React, { useState, MouseEvent, useEffect } from "react";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.classList.contains("modal-overlay")
    ) {
      handleClose();
    }
  };

  return (
    <div
      className={`modal-overlay ${isModalOpen ? "modal-open" : "modal-closed"}`}
      onClick={handleModalClick}
    >
      <div className={`modal ${isModalOpen ? "modal-open" : "modal-closed"}`}>
        <button className="modal-close" onClick={handleClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
