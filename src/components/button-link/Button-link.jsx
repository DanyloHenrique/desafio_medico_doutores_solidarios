import React from "react";

import { Link } from "react-router";

import s from "./button-link.module.scss";

function ButtonLink({ isPrimary, isSecondary, title, to }) {
  let combinedClass = `${s.link}`;

  if (isPrimary) {
    combinedClass = `${s.link} ${s.linkPrimary}`;
  }

  if (isSecondary) {
    combinedClass = `${s.link} ${s.linkSecondary}`;
  }

  return (
    <Link className={combinedClass} to={to}>
      {title}
    </Link>
  );
}

export default ButtonLink;
