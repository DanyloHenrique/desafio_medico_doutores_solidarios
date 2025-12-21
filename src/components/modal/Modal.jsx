import React, { useEffect } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

import ButtonLink from "@/components/button-link/Button-link";

import s from "./modal.module.scss";

function Modal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={s.modal}>
      <FaRegCircleXmark className={s.closeModal} onClick={onClose} />
      <nav>
        <div onClick={onClose}>
          <ButtonLink to="/" title="Home" />
        </div>
        <div onClick={onClose}>
          <ButtonLink to="voluntary" title="Seja Voluntário" />
        </div>
      </nav>
    </div>
  );
}

export default Modal;
