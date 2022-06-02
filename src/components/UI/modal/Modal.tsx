import React, { useEffect, useRef, useState } from "react";

import "./modal.scss";

interface ModalProps {
  active: boolean;
  id: string;
  children: React.ReactNode;
}

interface ModalContentProps {
  onClose?: () => void;
  children: React.ReactNode;
  setActive: (value:boolean) => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  

  // useEffect(() => {
  //   setActive(props.active);
  // }, [props.active]);

  return (
    <div id={props.id} className={`modal ${props.active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

export const ModalContent: React.FC<ModalContentProps> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    props.setActive(false)
    contentRef.current?.parentElement?.classList.remove("active");   //should add to parent
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
    <div className="modal__content__close" onClick={closeModal}> 
        <i className="bx bx-x"></i>
    </div>
    </div>
  );
};

export default Modal;
