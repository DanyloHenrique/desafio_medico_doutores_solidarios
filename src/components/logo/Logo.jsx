import React from "react";
import { Link } from "react-router";

import logoImage from "@/assets/icons/logo.svg";

import s from "./logo.module.scss";
const Logo = () => {
  return (
    <div className={s.logo}>
      <img src={logoImage} alt="Logo do site: coração branco" />
      <Link to="/">Médicos & Dentistas</Link>
    </div>
  );
};

export default Logo;
