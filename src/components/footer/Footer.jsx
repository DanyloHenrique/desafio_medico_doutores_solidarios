import React from "react";
import Logo from "../logo/Logo";

import s from "./footer.module.scss";

import email from "@/assets/icons/email.svg";
import phone from "@/assets/icons/phone.svg";
import location from "@/assets/icons/location.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <section>
        <div className={s.aboutAndContact}>
          <div className={s.about}>
            <Logo />
            <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
          </div>
          <div className={s.contacts}>
            <h4>Contato</h4>
            <ul>
              <li>
                <img src={email} alt="Icone de email" />{" "}
                contato@medico-dentista.org
              </li>
              <li>
                <img src={phone} alt="Icone de telefone" /> (11) 3000-0000
              </li>
              <li>
                <img src={location} alt="Icone de localização" /> São Paulo,
                Brasil
              </li>
            </ul>
          </div>
        </div>
        <div className={s.sociais}>
          <h4>Redes sociais</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </section>
      <p className={s.credits}>
        © 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
