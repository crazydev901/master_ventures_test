import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export type ModalProps = {
  show?: boolean,
  onClose: () => void
};

const Modal: React.FC<ModalProps> = ({ children, show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);    
  }, []);

  const handleCloseClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal"]}>
        <div className={styles["close-btn"]}>
          <button onClick={handleCloseClick}>
            X
          </button>
        </div>
        <div className={styles["modal-body"]}>{children}</div>
      </div>
    </div>
  ) : null;
  
  if (isBrowser) {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot)
    {
      return ReactDOM.createPortal(
        modalContent,
        modalRoot
      );
    }
  }
  return null;
};

export default Modal;
