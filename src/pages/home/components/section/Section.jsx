import React from "react";

import s from "./section.module.scss";

import stethoscope from "@/assets/icons/stethoscope.svg";
import banner from "@/assets/banner.png";

import ButtonLink from "@/components/button-link/Button-link";
import { useCheckingScreenIsDesktop } from "@/hooks/checkingScreenIsDesktop";

function Section() {
  const isDesktop = useCheckingScreenIsDesktop();

  return (
    <section className={s.sectionInitial}>
      <div className={s.content}>
        <div className={s.badge}>
          <img src={stethoscope} alt="ícone de estetoscópio" />
          <p>Saúde para todos</p>
        </div>

        <h1>Saúde e cuidado sem barreiras</h1>
        <p>
          Um projeto dedicado a oferecer atendimento médico e odontológico
          gratuito para pessoas que mais precisam na nossa comunidade.
        </p>
        <div className={s.buttonList}>
          <ButtonLink title="Seja Voluntário" to="/" isPrimary isHome />
          <ButtonLink title="Como Ajudar" to="" isSecondary isHome />
        </div>
      </div>

      {isDesktop ? (
        <div className={s.banner}>
          <img
            src={banner}
            alt="Banner de médico voluntário"
            className="desktop banner"
          />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Section;
