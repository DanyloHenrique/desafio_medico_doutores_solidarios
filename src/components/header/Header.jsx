import React, { useState } from "react";

import s from "./header.module.scss";

import ButtonLink from "../button-link/Button-link";
import Logo from "../logo/Logo";

import menu from "@/assets/icons/menu.svg";

import { useCheckingScreenIsDesktop } from "@/hooks/checkingScreenIsDesktop";
import Modal from "../modal/Modal";

function Header() {
  const isDesktop = useCheckingScreenIsDesktop();

  const [openModal, setOpenModal] = useState(false);

  return (
    <header className={s.header}>
      <div>
        <Logo />
      </div>

      <nav>
        {isDesktop ? (
          <>
            <ButtonLink to="/" title="Home" />
            <ButtonLink to="voluntary" title="Seja Voluntário" isPrimary />
          </>
        ) : (
          <img
            src={menu}
            alt="Icone de menu"
            onClick={() => setOpenModal(true)}
          />
        )}
      </nav>

      {openModal && <Modal onClose={() => setOpenModal(false)} />}
    </header>
  );
}

export default Header;
