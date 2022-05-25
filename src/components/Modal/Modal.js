//Modal.js

import React, { useEffect, useRef } from "react";
import styles from "./modal.module.css";
const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <>
      <div
        ref={modalRef}
        style={backdropStyle}
        className={`${styles.modal__wrap}`}
      >
        <div
          onClick={onClose}
          style={{
            width: 60,
            height: 40,
            position: "absolute",
            color: "#fff",
            fontSize: 20,
            top: 0,
            right: 0,
            margin: "1rem",
          }}
          className={styles.close__btn}
        >
          X
        </div>
        <div style={modalStyle} className={styles.modal}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
